import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodFactsService {

  private apiUrl = 'https://world.openfoodfacts.org/cgi/search.pl';

  constructor(private http: HttpClient) {}

  searchProducts(query: string) {
    return this.http.get<any>(this.apiUrl, {
      params: {
        search_terms: query,
        search_simple: '1',
        action: 'process',
        json: '1',
        page_size: '12'
      }
    });
  }
}

