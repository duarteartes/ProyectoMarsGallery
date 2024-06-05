// Importamos el decorador y otros módulos necesarios de Angular
import { Component, OnInit } from '@angular/core';
import { ComunicacionNasaService } from '../services/comunicacion-nasa.service';
import { Router } from '@angular/router';

// Utilizamos el decorador para definir el metadata del componente
@Component({
  // El selector identifica este componente en las plantillas
  selector: 'app-listado-rovers',
  // Definimos la ruta del archivo HTML para este componente
  templateUrl: './listado-rovers.component.html',
  // Definimos la ruta del archivo CSS con los estilos para este componente
  styleUrls: ['./listado-rovers.component.css']
})

// Exportamos la clase que representa el componente
export class ListadoRoversComponent implements OnInit {
  // Declaramos un array para almacenar la lista de rovers
  rovers: any[] = [];
  // Declaramos un objeto para almacenar los detalles del rover seleccionado
  roverDetails: any = {};
  // Utilizamos el constructor para recibir las instancias de los servicios necesarios
  constructor(private nasaService: ComunicacionNasaService, private router: Router) {}
  // Declaramos el ciclo de vida que se ejecuta cuando se inicia el componente
  ngOnInit(): void {
    // Llamamos al servicio para obtener el listado de los rovers
    this.nasaService.obtenerListadoRovers().subscribe((data: any) => {
      // Asignamos el array obtenido a la propiedad del componente
      this.rovers = data.rovers;
    });
  }
  // Declaramos este método para ver los detalles de un rover recibiendo el nombre del rover como parámetro
  verDetalles(roverName: string): void {
    // Vamos hasta la ruta específica utilizando el enrutador de Angular
    this.router.navigate(['/rovers', roverName.toLowerCase()]);
  }
}