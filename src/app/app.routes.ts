// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './seguridad/login/login.component';
import { RegisterComponent } from './seguridad/register/register.component';
import { FormfreetimerComponent } from './seguridad/form-freetimer/form-freetimer.component';
import { FormTerminosComponent } from './seguridad/form-terminos/form-terminos.component';
import { FormBothComponent } from './seguridad/form-both/form-both.component';
import { newTaskComponent } from './task/newTask1/newTask.component';
import { newTaskComponent2 } from './task/newTask2/newTask2.component';
import { newTaskComponent3 } from './task/newTask3/newTask3.component';
 
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'form-freetimer', component: FormfreetimerComponent },
  { path: 'form-terminos', component: FormTerminosComponent },
  { path: 'form-both', component: FormBothComponent },
  { path: 'newTask', component: newTaskComponent },
  { path: 'newTask2', component: newTaskComponent2 },
  { path: 'newTask3', component: newTaskComponent3 }

];
