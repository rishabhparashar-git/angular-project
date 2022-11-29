import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartModule } from './components/cart/cart.module';
import { FallbackComponent } from './components/fallback/fallback.component';
import { OrderModule } from './components/order/order.module';
import { ProductModule } from './components/product/product.module';
import { AdminRoutingModule } from './components/admin/admin-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'orders',
    loadChildren: () => OrderModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminRoutingModule,
  },
  {
    path: 'products',
    loadChildren: () => ProductModule,
  },
  {
    path: 'cart',
    loadChildren: () => CartModule,
  },
  { path: 'fallback', component: FallbackComponent },
  { path: '**', component: FallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
