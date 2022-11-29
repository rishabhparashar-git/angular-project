import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { CustomerOrderInfoComponent } from './customer-order-info/customer-order-info.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  { path: '', component: MyOrdersComponent, canActivate: [AuthGuard] },
  {
    path: ':order-id',
    component: CustomerOrderInfoComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
