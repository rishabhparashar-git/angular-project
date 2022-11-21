import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ManageOrderService } from 'src/app/services/admin/order/manage-order.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  loadingState: boolean = true;
  orderId: string = '';
  status: string = '';
  cartDetails: any;
  addressDetails: any;
  paymentDetails: any;
  userInfo: any;

  cartValue = {
    products: [{ id: '', title: '', price: 0, count: 0, category: '' }],
    totalValue: 0,
    gst: 0,
    payableAmount: 0,
  };
  allProducts: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private orderService: ManageOrderService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    //getting order ID
    let id: string = '';
    this.route.paramMap.pipe(take(1)).subscribe((params) => {
      const fetchedId = params.get('order-id');
      id = fetchedId ? fetchedId : '';
      console.log('1', id);
    });

    // getting order info
    this.orderService.getOrderById(id).then((resp) => {
      if (resp) {
        console.log('2', resp);
        this.cartDetails = JSON.parse(resp['cartDetails']);
        this.addressDetails = JSON.parse(resp['addressDetails']);
        this.paymentDetails = JSON.parse(resp['paymentDetails']);
        this.userInfo = JSON.parse(resp['userInfo']);
        this.status = resp['status'];
        this.orderId = resp['orderId'];
        console.log(this.status);
      }

      this.productService
        .getProducts()
        .pipe(take(1))
        .subscribe((resp) => {
          this.allProducts = resp;
          console.log('3', this.allProducts);

          this.allProducts.forEach((prod) => {
            const prodId = prod.id;
            if (Object.keys(this.cartDetails).includes(prod.id)) {
              this.cartValue.products.push({
                id: prodId,
                title: prod.title,
                price: +prod.price,
                count: this.cartDetails[prodId],
                category: prod.category,
              });
              this.cartValue.totalValue +=
                +prod.price * this.cartDetails[prodId];
            }
          });

          this.cartValue.gst = (this.cartValue.totalValue * 15) / 100;
          this.cartValue.payableAmount =
            this.cartValue.gst + this.cartValue.totalValue;
          console.log(this.cartValue);
          this.loadingState = false;
        });
    });
  }
}
