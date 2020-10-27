import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [ProductsComponent, ProductListComponent, ProductDetailsComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
