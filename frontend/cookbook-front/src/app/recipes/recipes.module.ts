import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './pages/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeFormComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule {}
