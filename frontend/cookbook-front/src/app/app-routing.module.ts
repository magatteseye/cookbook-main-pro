import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then(m => m.RecipesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
