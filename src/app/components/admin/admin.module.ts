import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminRoutingModule } from './admin-routing.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    OrderDetailComponent,
    ProductFormComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    AdminRoutingModule,
    SharedModule,
  ],
  exports: [
    AdminProductsComponent,
    AdminOrdersComponent,
    OrderDetailComponent,
    ProductFormComponent,
  ],
})
export class AdminModule {}
