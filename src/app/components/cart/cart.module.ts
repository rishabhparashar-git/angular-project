import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { CartSectionComponent } from './shopping-cart/cart-section/cart-section.component';
import { CheckoutSectionComponent } from './shopping-cart/checkout-section/checkout-section.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartSectionComponent,
    CheckoutSectionComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatBadgeModule,
    SharedModule,
  ],
  exports: [],
})
export class CartModule {}
