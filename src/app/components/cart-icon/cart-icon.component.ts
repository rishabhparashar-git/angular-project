import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css'],
})
export class CartIconComponent {
  constructor(private cartService: CartService) {}

  goToCart() {
    this.cartService.checkOut();
  }

  displayBadge() {
    return Object.keys(this.cartService.cart).length ? false : true;
  }

  badgeQuantity() {
    return Object.keys(this.cartService.cart).length > 99 ? '...' : Object.keys(this.cartService.cart).length;
  }
}
