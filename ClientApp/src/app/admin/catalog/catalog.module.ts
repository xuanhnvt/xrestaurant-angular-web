import { NgModule } from '@angular/core';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    SharedModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
