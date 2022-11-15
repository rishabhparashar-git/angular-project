import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any = {};
  constructor() {}

  AddToCart(pId: any) {
    this.cart[pId] = 1;
  }

  cartOperations(pId: string, operation: string) {
    if (operation === '+') {
      this.cart[pId] += 1;
    } else {
      this.cart[pId] === 1 ? delete this.cart[pId] : (this.cart[pId] -= 1);
    }
  }

  checkOut() {
    console.log('checking out your cart');
    console.table(this.cart);
  }
}
