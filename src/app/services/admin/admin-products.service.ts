import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthServices } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminProductsService {
  constructor(private http: HttpClient, private authService: AuthServices) {}
  getAllProducts() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get(
          'https://the-tech-shop-default-rtdb.firebaseio.com/products.json?auth=' +
            user.token
        );
      })
    );
  }
}
