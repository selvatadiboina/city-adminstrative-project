import { Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';


export const routes: Routes =
 [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent}
 ];