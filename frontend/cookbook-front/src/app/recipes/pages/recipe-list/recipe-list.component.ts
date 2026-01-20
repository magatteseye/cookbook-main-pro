import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  loading = true;
  error = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAll().subscribe({
      next: (data) => {
        this.recipes = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
  onDelete(id: string): void {
    const confirmDelete = confirm('Supprimer cette recette ?');
  
    if (!confirmDelete) {
      return;
    }
  
    this.recipeService.delete(id).subscribe({
      next: () => {
        // Mise à jour immédiate de la liste (UX pro)
        this.recipes = this.recipes.filter(recipe => recipe._id !== id);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la suppression');
      }
    });
  }
  
  
}



