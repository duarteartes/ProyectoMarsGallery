// Importamos el decorador y otros módulos necesarios de Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Utilizamos el decorador para definir el metadata del componente
@Component({
  // El selector identifica este componente en las plantillas
  selector: 'app-listado-camaras',
  // Definimos la ruta del archivo HTML para este componente
  templateUrl: './listado-camaras.component.html',
  // Definimos la ruta del archivo CSS con los estilos para este componente
  styleUrl: './listado-camaras.component.css'
})

// Exportamos la clase que representa el componente
export class ListadoCamarasComponent {
  // Utilizamos el decorador Input para indicar que esta propiedad va a recibir datos del componente padre
  // El componente padre pasará un array de cámaras a través de la propiedad cámaras
  @Input() camaras: any[] = [];
  // Utilizamos el decorador Output para indicar que esta propiedad emitirá eventos al componente padre
  // Utilizamos eventEmitter para emitir eventos con un parámetro de tipo string (nombre de la cámara)
  @Output() verFotos = new EventEmitter<string>();
  // Declaramos este método para manejar el evento click "Ver Fotos" de una cámara concreta
  onClickVerFotos(cameraName: string): void {
    // Utilizamos un bloque try/catch para capturar y manejar excepciones
    try {
      // Emitimos el evento utilizando el evento emit pasando el nombre de la cámara como argumento
      this.verFotos.emit(cameraName);
    } catch (error) {
      // Manejamos el error si ocurre y mostramos un mensaje de error por consola
      console.error('Error al emitir el evento:', error);
    }
  }
}
