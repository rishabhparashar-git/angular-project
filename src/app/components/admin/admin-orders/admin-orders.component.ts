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
  localOrders: any = {};
  statusParam: any = '';
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
      resp.forEach((prod: any) => {
        let orderId = prod['orderId'];
        if (this.localOrders[orderId]) {
          this.localOrders[orderId].status = prod['status'];
        } else {
          this.localOrders[orderId] = { status: prod['status'] };
        }
      });

      this.route.queryParamMap.subscribe((params) => {
        this.statusParam = params.get('status');

        if (
          this.statusParam &&
          this.orderManagement.STATUS.includes(this.statusParam)
        ) {
          this.availableOrders = [];
          Object.keys(this.localOrders).forEach((prodId: any) => {
            if (this.localOrders[prodId].status === this.statusParam) {
              this.availableOrders.push(prodId);
            }
          });
        } else {
          this.availableOrders = [...Object.keys(this.localOrders)];
        }
      });

      console.log(this.availableOrders);
    });
  }

  goToOrderDetail(orderId: string) {
    this.router.navigate([orderId], { relativeTo: this.route });
  }
  search(value: string) {
    this.availableOrders = value
      ? this.localOrders.filter((prod: any) =>
          prod.id.toLowerCase().includes(value.toLowerCase())
        )
      : this.localOrders;
  }

  changeStatus(statusToFilterBy: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams:
        statusToFilterBy === 'clear' ? {} : { status: statusToFilterBy },
    });
  }
}
