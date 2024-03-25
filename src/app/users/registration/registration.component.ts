import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule,Validators } from '@angular/forms';
import User from '../../model/user';
import { UserService } from '../../service/user.service';


 
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {

  user: User = new User('',0,'','','')
  userForm: FormGroup
  userService = inject(UserService)

  constructor(private fb: FormBuilder) {
    // TODO Include form valdiation
    this.userForm = fb.group({
      // fullname: new FormControl(''),
      // username: new FormControl(''),
      // email: new FormControl(''),
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
      // password: new FormControl('')
    })
  }

  createuser() {
    // TODO The submit button must be disabled till the action is complete
    // TODO Once the task is complete the user needs to be updated about that
    this.user = this.userForm.value as User
    console.log(this.user)
    // TODO Hash the password so that the password is not stored as plain text
    this.userService.createUser(this.user).subscribe(response => console.log(response))
  }
  
}
