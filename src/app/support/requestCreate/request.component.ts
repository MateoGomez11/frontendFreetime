import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class requestComponent implements OnInit {
  caseNumber: string = '';
  userEmail: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.caseNumber = params['support_id'];
      this.userEmail = params['user_email'];  // Obtiene el correo del usuario
    });
  }
}
