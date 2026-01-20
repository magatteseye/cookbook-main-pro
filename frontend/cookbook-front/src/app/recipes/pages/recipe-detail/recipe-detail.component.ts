import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
    
    
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.recipeService.getOne(id).subscribe(data => {
        this.recipe = data;
        this.loading = false;
      });
    }
  }
  onDelete(): void {
    if (confirm('Supprimer cette recette ?')) {
      this.recipeService.delete(this.recipe._id!).subscribe(() => {
        this.router.navigate(['/recipes']);
      });
    }
  }
  
}


