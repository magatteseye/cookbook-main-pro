
import { Component } from '@angular/core';
import { OpenFoodFactsService } from './recipes/services/open-food-facts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Plateform-cookbook';
  query = '';

  constructor(private offService: OpenFoodFactsService) {}

  search(): void {
    if (!this.query.trim()) return;

    this.offService.searchProducts(this.query).subscribe({
      next: (data:any) => {
        if (!data.products || data.products.length === 0) {
          alert('Aucun produit trouvé');
        } else {
          console.log(data.products);
          alert(`${data.products.length} produits trouvés`);
        }
      },
      error: () => {
        alert('Erreur lors de la recherche');
      }
    });
  }

  onSearch(): void {
    if (this.query) {
      window.location.href = `/search?q=${this.query}`;
    }
  }
}
