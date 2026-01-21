import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenFoodFactsService } from '../../recipes/services/open-food-facts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl:  './search.component.scss'
})
export class SearchComponent implements OnInit {

  query = '';
  results: any[] = [];
  loading = false;
  noResult = false;

  constructor(
    private route: ActivatedRoute,
    private offService: OpenFoodFactsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];

      if (this.query) {
        this.search();
      }
    });
  }

  search(): void {
    this.loading = true;
    this.noResult = false;

    this.offService.searchProducts(this.query).subscribe({
      next: (data) => {
        this.results = data.products || [];
        this.noResult = this.results.length === 0;
        this.loading = false;
      },
      error: () => {
        this.noResult = true;
        this.loading = false;
      }
    });
  }
}
