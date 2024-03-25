import {inject, Injectable } from '@angular/core';

import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

import review from '../model/review';


@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  
  fireStore = inject(Firestore)
  reviewCollection = collection(this.fireStore, 'feedback')

  userreview(review: review): Observable<string> {
    const reviewId = addDoc(this.reviewCollection, review)
      .then(response => response.id)
    return from(reviewId)
  }
}
