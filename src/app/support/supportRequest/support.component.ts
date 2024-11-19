import { Component } from '@angular/core';
import { SupportService } from './support.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
  imports: [FormsModule, CommonModule]
})
export class SupportComponent {
  supportDescription: string = '';
  userId: number = 1;  // Aquí deberías obtener el id del usuario dinámicamente
  supportStateId: number = 1;  // El estado del soporte, podrías obtenerlo dinámicamente también
  message: string = '';

  constructor(private supportService: SupportService) {}

  createSupport() {
    this.supportService.createSupport(this.supportDescription, this.userId, this.supportStateId)
      .subscribe(
        response => {
            this.message = 'Soporte creado exitosamente.';  
        },
        error => {
          this.message = `Error al crear soporte: ${error.message}`;
        }
      );
  }
}
