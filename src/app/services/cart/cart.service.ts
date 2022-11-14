import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthServices } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private fs: Firestore, private authService: AuthServices) {}

  cart: any = {
    UTLfYXgdAt27bR066jEC: 3,
    fdhgdgfh: 1,
    dgnidrfgid: 1,
  };

  async AddToCart(pId: any) {
    this.cart[pId] = 1;
  }

  cartOperations(pId: string, operation: string) {
    if (operation === '+') {
      this.cart[pId] += 1;
    } else {
      this.cart[pId] === 1 ? delete this.cart[pId] : (this.cart[pId] -= 1);
    }
  }
}
