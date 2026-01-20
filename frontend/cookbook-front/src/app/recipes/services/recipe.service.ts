import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/api/recipes';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Recipe[]>('http://localhost:3000/api/recipes');
  }
  

  getOne(id: string) {
    return this.http.get<Recipe>(
      `http://localhost:3000/api/recipes/${id}`
    );
  }
  

  create(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }
  
  update(id: string, recipe: Recipe) {
    return this.http.put<Recipe>(
      `http://localhost:3000/api/recipes/${id}`,
      recipe
    );
  }
  

  delete(id: string) {
    return this.http.delete(
      `http://localhost:3000/api/recipes/${id}`
    );
  }
  
}
