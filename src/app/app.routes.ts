// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './seguridad/login/login.component';
import { RegisterComponent } from './seguridad/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
