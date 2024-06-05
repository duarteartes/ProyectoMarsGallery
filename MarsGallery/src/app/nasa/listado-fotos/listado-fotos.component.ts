// Importamos el decorador y otros módulos necesarios de Angular
import { Component, Input } from '@angular/core';

// Utilizamos el decorador para definir el metadata del componente
@Component({
  // El selector identifica este componente en las plantillas
  selector: 'app-listado-fotos',
  // Definimos la ruta del archivo HTML para este componente
  templateUrl: './listado-fotos.component.html',
  // Definimos la ruta del archivo CSS con los estilos para este componente
  styleUrl: './listado-fotos.component.css'
})

// Exportamos la clase que representa el componente
export class ListadoFotosComponent {
  // Utilizamos el decorador Input para indicar que esta propiedad va a recibir datos del componente padre
  // El componente padre pasará un array de fotos a través de la propiedad fotos
  @Input() fotos: any[] = [];
  // Declaramos esta propiedad para determinar si hay que mostrar un mensaje concreto en el componente
  mostrarMensaje: boolean = false;
  // Declaramos el ciclo de vida que se ejecuta cuando hay cambios en las propiedades de entrada del componente
  ngOnChanges(): void {
    // Si el array de fotos es 0, establecemos el booleano mostrarMensaje en true
    this.mostrarMensaje = this.fotos.length === 0;
  }
}
