import { Component, Inject, OnInit } from '@angular/core';
import { ProductListItem } from '../models/product-list-item.model.ts';
import { ProductPagedListViewModel } from '../models/product-paged-list-view-model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public forecasts: ProductListItem[];
  private baseUrl: string;
  constructor(private productService: ProductService, @Inject('BASE_URL') baseUrl: string) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe(result => {
      this.forecasts = result.items;
    }, error => console.error(error));
  }

}

