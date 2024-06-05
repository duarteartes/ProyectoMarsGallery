// Importamos el decorador y otros módulos necesarios de Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicacionNasaService } from '../services/comunicacion-nasa.service';

// Utilizamos el decorador para definir el metadata del componente
@Component({
  // El selector identifica este componente en las plantillas
  selector: 'app-detalle-rover',
  // Definimos la ruta del archivo HTML para este componente
  templateUrl: './detalle-rover.component.html',
  // Definimos la ruta del archivo CSS con los estilos para este componente
  styleUrls: ['./detalle-rover.component.css']
})

// Exportamos la clase que representa el componente
export class DetalleRoverComponent implements OnInit {
  // Declaramos las propiedades para almacenar información de un rover, sus cámaras y las fotos de cada cámara
  rover: any = {};
  camaras: any[] = [];
  fotos: any[] = [];
  // Declaramos el constructor que recibe las instancias de los servicios y objetos
  // Son necesarios para la navegación o obtención de datos
  constructor(private route: ActivatedRoute, private router: Router, private nasaService: ComunicacionNasaService) {}
  // Declaramos el ciclo de vida que se ejecuta cuando se inicia el componente
  ngOnInit(): void {
    // Obtenemos el nombre del rover de los parámetros de la ruta actual
    const roverName = this.route.snapshot.paramMap.get('name');
    // Verificamos con una condición si hemos obtenido el nombre del rover
    if (roverName) {
      // Llamamos al servicio con el que obtendremos los detalles del rover
      this.nasaService.obtenerDetalleRover(roverName).subscribe((data: any) => {
        // Asignamos la información obtenida con los detalles del rover y sus cámaras
        this.rover = data.rover;
        this.camaras = data.rover.cameras;
      });
    }
  }
  // Declaramos este método para volver a navegar al listado de rovers
  volver(): void {
    this.router.navigate(['/rovers']);
  }
  // Declaramos este método para obtener las fotos de una cámara concreta del rover
  verFotosDeCamara(cameraName: string): void {
    // Llamamos al servicio con el que obtendremos las fotos de la cámara seleccionada
    this.nasaService.obtenerFotosDeCamaraPorNombre(this.rover.name.toLowerCase(), cameraName).subscribe(
      // Al recibir las fotos, las asignamos a una propiedad
      (fotos: any) => {
        this.fotos = fotos.photos;
      },
      // En caso de error mostraremos un mensaje en la consola
      (error: any) => {
        console.error('Error al obtener fotos de la cámara:', error);
      }
    );
  }
}
