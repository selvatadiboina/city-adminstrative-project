import { Injectable } from '@angular/core';
import {  AngularFireList } from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = this.db.list('/users');
  }

  
  addUser(user: any): Promise<any> {
    return this.usersRef.push(user).then((ref) => {
      return ref;
    });
  }

}
