// Importamos el decorador
import { Component } from '@angular/core';

// Utilizamos el decorador para definir el metadata del componente
@Component({
  // El selector identifica este componente en las plantillas
  selector: 'app-root',
  // Definimos la ruta del archivo HTML para este componente
  templateUrl: './app.component.html',
  // Definimos la ruta del archivo CSS con los estilos para este componente
  styleUrl: './app.component.css'
})

// Exportamos la clase que representa el componente
export class AppComponent {
  // Definimos esta propiedad para establecer el título del proyecto
  title = 'Mars Gallery';
}