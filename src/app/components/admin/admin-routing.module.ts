import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/services/auth/admin.guard';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  {
    path: 'orders',
    component: AdminOrdersComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'orders/:order-id',
    component: OrderDetailComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'products',
    component: AdminProductsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'products/:product-id',
    component: ProductFormComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
