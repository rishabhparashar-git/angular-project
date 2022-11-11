import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthServices } from '../auth/auth.service';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class AdminProductsService {
  constructor(
    private fs: Firestore,
    private http: HttpClient,
    private authService: AuthServices
  ) {}
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
  addNewProduct(product: Product) {
    product.id = doc(collection(this.fs, 'products')).id;
    return addDoc(collection(this.fs, 'products'), product);
  }

  updateProduct(product: Product, id: string) {
    let productReference = doc(this.fs, `products/${id}`);
    return updateDoc(productReference, { ...product });
  }

  async getProductById(id: string) {
    const productRef = doc(this.fs, 'products', id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      return productSnap.data();
    } else {
      return undefined;
    }
  }
}
