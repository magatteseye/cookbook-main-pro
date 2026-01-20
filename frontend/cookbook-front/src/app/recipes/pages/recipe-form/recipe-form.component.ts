import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { OpenFoodFactsService } from '../../services/open-food-facts.service';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html'
})
export class RecipeFormComponent implements OnInit {
  recipe: Recipe = new Recipe(
    null,
    '',
    '',
    [],
    [],
    '',
    ''
  );
  

  isEdit = false;
  recipeId!: string;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {
      this.isEdit = true;
      this.recipeId = id;
  
      this.recipeService.getOne(id).subscribe(data => {
        this.recipe = data;
      });
    }
  }
  
  onSubmit(): void {
  if (this.isEdit) {
    this.recipeService.update(this.recipeId, this.recipe).subscribe(() => {
      this.router.navigate(['/recipes', this.recipeId]);
    });
  } else {
    this.recipeService.create(this.recipe).subscribe(() => {
      this.router.navigate(['/recipes']);
    });
  }
}

  }
  
  


