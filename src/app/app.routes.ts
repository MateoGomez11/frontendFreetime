// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './seguridad/login/login.component';
import { RegisterComponent } from './seguridad/register/register.component';
import { FormfreetimerComponent } from './seguridad/form-freetimer/form-freetimer.component';
import { FormTerminosComponent } from './seguridad/form-terminos/form-terminos.component';
import { FormBothComponent } from './seguridad/form-both/form-both.component';
import { SupportComponent } from './support/supportRequest/support.component';
import { requestComponent } from './support/requestCreate/request.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'form-freetimer', component: FormfreetimerComponent},
  { path: 'form-terminos', component:FormTerminosComponent},
  { path: 'form-both', component:FormBothComponent},
  { path: 'supportrequest', component: SupportComponent},
  { path: 'requestcreate', component: requestComponent},
];
