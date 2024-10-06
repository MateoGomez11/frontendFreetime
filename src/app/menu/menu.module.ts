import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuFreetimerComponent} from './freetimer-menu/menu-freetimer.component';
import { RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: 'menu-freetimer',
    component: MenuFreetimerComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MenuFreetimerModule { }
