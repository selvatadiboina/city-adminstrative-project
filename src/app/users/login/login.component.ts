import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgIf } from '@angular/common';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm: FormGroup; 
  loginError: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({ 
      username: ['', Validators.required], 
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.valid) { 
      const { username, password } = this.loginForm.value; 
      const success = await this.authService.login(username, password);
      if (success) {
        console.log('Login successful');
       
      } else {
        this.loginError = 'Invalid username or password';
      }
    }
  }
}
