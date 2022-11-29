import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [RouterModule, ProductRoutingModule, SharedModule, CommonModule],
  exports: [ProductsComponent, ProductDetailsComponent],
})
export class ProductModule {}
