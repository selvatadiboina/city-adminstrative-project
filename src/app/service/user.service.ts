import {inject, Injectable } from '@angular/core';

import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import User from '../model/user';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  fireStore = inject(Firestore)
  userCollection = collection(this.fireStore, 'registration')

  createUser(user: User): Observable<string> {
    const userId = addDoc(this.userCollection, user)
      .then(response => response.id)
    return from(userId)
  }
}
