import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupportComponent} from './supportRequest/support.component';
import { RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: 'support',
    component: SupportComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SeguridadModule { }
