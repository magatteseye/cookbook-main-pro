import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './pages/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'new', component: RecipeFormComponent },
  { path: ':id', component: RecipeDetailComponent },
  { path: 'edit/:id', component: RecipeFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
