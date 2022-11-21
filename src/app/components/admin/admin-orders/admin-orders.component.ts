import { Component, OnInit } from '@angular/core';
import { ManageOrderService } from 'src/app/services/admin/order/manage-order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  availableOrders: any[] = [];
  constructor(private orderManagement: ManageOrderService) {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('onInIt called');
    this.orderManagement.getOrders().subscribe((resp) => {
      this.availableOrders = resp;
    });
  }

  completeOrder(orderId: string) {}
  goToOrderDetail(orderId: string) {
    console.log('going to', orderId);
  }
  search(value: string) {}
  changeCategory(value: string) {}
}
