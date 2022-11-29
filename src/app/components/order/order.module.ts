import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CustomerOrderInfoComponent } from './customer-order-info/customer-order-info.component';
import { FeedbackModalComponent } from './my-orders/feedback-modal/feedback-modal.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [
    CustomerOrderInfoComponent,
    MyOrdersComponent,
    FeedbackModalComponent,
  ],
  imports: [CommonModule, OrderRoutingModule, SharedModule],
  exports: [RouterModule],
})
export class OrderModule {}
