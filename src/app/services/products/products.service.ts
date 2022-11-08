import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}
  colors: any = '';
  getProducts() {
    return this.http.get(
      'https://the-tech-shop-default-rtdb.firebaseio.com/colors.json'
    );
  }
}
