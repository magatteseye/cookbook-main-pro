import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';

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

  // 🔹 AJOUTS MINIMAUX
  ingredientsText = '';
  stepsText = '';

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

        // 🔹 Pré-remplissage en mode édition
        this.ingredientsText = this.recipe.ingredients.join('\n');
        this.stepsText = this.recipe.steps.join('\n');
      });
    }
  }

  onSubmit(): void {

    // 🔹 Conversion textarea → tableaux (OBLIGATOIRE POUR MONGODB)
    this.recipe.ingredients = this.ingredientsText
      .split('\n')
      .map(i => i.trim())
      .filter(i => i);

    this.recipe.steps = this.stepsText
      .split('\n')
      .map(s => s.trim())
      .filter(s => s);

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

  


