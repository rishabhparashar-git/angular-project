import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ManageOrderService {
  constructor(private fs: Firestore) {
    console.log('constructor called');
  }

  getOrders() {
    console.log('service called');
    let ordersReference = collection(this.fs, 'orders');
    return collectionData(ordersReference, { idField: 'id' });
  }
}
