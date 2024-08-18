import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },{
    path: 'registro',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SeguridadModule { }
