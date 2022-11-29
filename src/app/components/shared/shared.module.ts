import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent,
    LoadingSpinnerComponent,
    CartIconComponent,
    AlertComponent,
  ],
  imports: [MatBadgeModule, CommonModule, RouterModule],
  exports: [
    NavigationComponent,
    CartIconComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
})
export class SharedModule {}
