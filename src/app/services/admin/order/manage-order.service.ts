import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ManageOrderService {
  constructor(private fs: Firestore) {}

  getOrders() {
    let ordersReference = collection(this.fs, 'orders');
    return collectionData(ordersReference, { idField: 'id' });
  }

  async getOrderById(id: string) {
    const orderRef = doc(this.fs, 'orders', id);
    const orderSnap = await getDoc(orderRef);
    if (orderSnap.exists()) {
      return orderSnap.data();
    } else {
      return undefined;
    }
  }

  async getFilteredOrders() {
    let q = query(
      collection(this.fs, 'orders'),
      where('id', 'array-contains', [
        '1JXGVElsMznriarkMajL',
        '4Ud09Ru5m3F3f575J4g3',
        '4nFzRukwZYJSvb1YPXan',
      ])
    );
    const docsSnap = await getDocs(q);

    docsSnap.forEach((doc) => {
      console.log(doc.data());
    });
  }
}
