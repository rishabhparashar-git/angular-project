import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/products/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.css'],
})
export class CartSectionComponent implements OnInit {
  productsList: any[] = [];
  totalAmount: number = 0;
  gst: number = 0;
  payableAmount: number = 0;
  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let cartInfo = this.cartService.cart;
    this.productService.getProducts().subscribe((resp: Product[]) => {
      let allProducts = resp;
      allProducts.forEach((prod) => {
        let id: string = prod.id ? prod.id : '';
        if (Object.keys(cartInfo).includes(id)) {
          let currTotal = +prod.price * cartInfo[id];
          this.productsList.push({
            ...prod,
            count: cartInfo[id],
            total: currTotal,
          });
          this.totalAmount += currTotal;
        }
      });
      this.gst = Math.floor(18 * (this.totalAmount / 100));
      this.payableAmount = this.gst + this.totalAmount;
      console.log(this.productsList);
    });
  }

  decrement(id: string) {
    this.cartService.cartOperations(id, '-');
  }
  increment(id: string) {
    this.cartService.cartOperations(id, '+');
  }
}
