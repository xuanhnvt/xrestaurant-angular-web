import { NgModule } from '@angular/core';
import { CatalogRoutingModule } from './catalog-routing.module';
import { SharedModule } from 'src/app/shared';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CatalogRoutingModule,
    ProductsModule
  ]
})
export class CatalogModule { }
