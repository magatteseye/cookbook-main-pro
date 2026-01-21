import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodFactsService {

  private API_URL = 'https://world.openfoodfacts.org/cgi/search.pl';

  constructor(private http: HttpClient) {}

  searchProducts(query: string): Observable<any> {
    return this.http.get<any>(this.API_URL, {
      params: {
        search_terms: query,
        search_simple: '1',
        action: 'process',
        json: '1',
        page_size: '10'
      }
    });
  }
}


