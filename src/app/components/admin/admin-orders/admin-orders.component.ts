import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ManageOrderService } from 'src/app/services/admin/order/manage-order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
})
export class AdminOrdersComponent implements OnInit {
  availableOrders: any[] = [];
  constructor(
    private orderManagement: ManageOrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('onInIt called');
    this.orderManagement.getOrders().subscribe((resp) => {
      this.availableOrders = resp;
    });
  }

  goToOrderDetail(orderId: string) {
    this.router.navigate([orderId], { relativeTo: this.route });
  }
  search(value: string) {}
  changeCategory(value: string) {}
}
