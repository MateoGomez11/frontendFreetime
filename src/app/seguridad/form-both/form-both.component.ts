import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-both',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-both.component.html',
  styleUrl: './form-both.component.css'
})
export class FormBothComponent {
  selectedCategory: string = '';
  acceptedTermsFreeTimer: boolean = false;
  acceptedTermsFullTimer: boolean = false;

  onSubmit() {
    if ((this.acceptedTermsFreeTimer&& this.acceptedTermsFullTimer) && this.selectedCategory) {
      console.log('Formulario enviado con éxito');
      console.log('Categoría seleccionada:', this.selectedCategory);
    } else {
      console.log('Por favor, complete el formulario correctamente.');
    }
  }
}
