import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgModel } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { NgClass } from '@angular/common';
import { Console } from 'console';
 
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private userService: UserService) {
    console.log(userService)
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target as HTMLFormElement;
    const user = {
      name: form['name'].valueOf,
      gender: form['gender'].value,
      phoneNumber: form['phoneNumber'].value,
      age: form['age'].value,
      username: form['username'].value,
      password: form['password'].value
    };

    this.userService.addUser(user)
      .then(() => {
        console.log('User added successfully');
        form.reset(); // Optionally, reset the form after successful submission
      })
      .catch(error => console.error('Error adding user:', error));
  }
}
