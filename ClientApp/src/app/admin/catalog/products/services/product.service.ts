import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProductListItem } from '../models/product-list-item.model.ts';
import { ProductPagedListViewModel } from '../models/product-paged-list-view-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://localhost:44332/api/v1.0/products';

  getProducts() {
    return this.http.get<ProductPagedListViewModel>(this.configUrl);
  }
}
