import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = {};
  cartObservable = new BehaviorSubject({});
  constructor() {}

  AddToCart(pId: any) {
    this.cart[pId] = 1;
    console.log(pId + ' added to cart');
    this.cartObservable.next(this.cart);
  }

  cartOperations(pId: string, operation: string) {
    if (operation === '+') {
      this.cart[pId] += 1;
      console.log(pId + ' count increased');
    } else {
      this.cart[pId] === 1 ? delete this.cart[pId] : (this.cart[pId] -= 1);
      console.log(pId + ' count decreased');
    }
    this.cartObservable.next(this.cart);
  }

  getCart() {
    console.log('cart info requested');
    return this.cartObservable;
  }

  checkOut() {
    console.log('checking out your cart');
    console.table(this.cart);
  }
}
