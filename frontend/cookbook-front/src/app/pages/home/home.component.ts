

import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipes/services/recipe.service';
import { Recipe } from '../../recipes/models/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipes: Recipe[] = [];
  featuredRecipes: Recipe[] = [];
  desserts: Recipe [] = [];
  loading = true;
  email = '';


  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAll().subscribe(data => {
      this.recipes = data.slice(0, 4);
      this.featuredRecipes = data.slice(0, 3);
      this.desserts = data.filter(r => r.category === 'dessert').slice(0, 3);
      this.loading = false;
    });
  }

  filterByCategory(category: string): void {
    this.loading = true;

    this.recipeService.getAll().subscribe(data => {
      this.recipes = data.filter(
        recipe => recipe.category === category
      );
      this.loading = false;
    });
  }
  loadAll(): void {
    this.loading = true;
  
    this.recipeService.getAll().subscribe(data => {
      this.recipes = data;
      this.loading = false;
    });
  }
  subscribe(): void {
    alert(`Merci pour votre inscription : ${this.email}`);
    this.email = '';
  }
  
  
}







