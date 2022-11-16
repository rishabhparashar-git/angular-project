import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = {};
  cartObservable = new Subject();
  constructor() {}

  AddToCart(pId: any) {
    this.cart[pId] = 1;
    this.cartObservable.next(this.cart);
  }

  cartOperations(pId: string, operation: string) {
    if (operation === '+') {
      this.cart[pId] += 1;
    } else {
      this.cart[pId] === 1 ? delete this.cart[pId] : (this.cart[pId] -= 1);
    }
    this.cartObservable.next(this.cart);
  }

  checkOut() {
    console.log('checking out your cart');
    console.table(this.cart);
  }
}
