import { Injectable } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  constructor(private fs: Firestore) {}

  sendRating(id: string, rating: number) {
    const docRef = doc(this.fs, `orders/${id}`);
    const data = { rating: rating };
    return setDoc(docRef, data, { merge: true });
  }
}
