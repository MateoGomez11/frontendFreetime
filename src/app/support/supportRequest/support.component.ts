import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/requestcreate']);
  }
}


