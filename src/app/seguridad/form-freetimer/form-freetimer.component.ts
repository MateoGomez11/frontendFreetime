import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-freetimer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-freetimer.component.html',
  styleUrl: './form-freetimer.component.css'
})
export class FormfreetimerComponent {
  selectedCategory: string = '';
  acceptedTerms: boolean = false;

  onSubmit() {
    if (this.acceptedTerms && this.selectedCategory) {
      console.log('Formulario enviado con éxito');
      console.log('Categoría seleccionada:', this.selectedCategory);
    } else {
      console.log('Por favor, complete el formulario correctamente.');
    }
  }
}
