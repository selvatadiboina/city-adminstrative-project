import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,RegistrationComponent,NgIf,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'city-adminstrative-project';
  signInForm: boolean = false
  signUpForm: boolean = false

  loadSignInForm(): void {
    this.signInForm = true
    this.signUpForm = false
  }

  loadSignUpForm(): void {
    this.signInForm = false
    this.signUpForm = true
  }
}
