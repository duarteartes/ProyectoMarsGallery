// Importamos el decorador injectable y los servicios necesarios
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Utilizamos el decorador para marcar la clase como un servicio inyectable en Angular
@Injectable({
  providedIn: 'root',
})

// Exportamos y definimos la clase de este servicio
export class ComunicacionNasaService {
  // Declaramos estas propiedades con la URL de la API de la NASA y la clave para la autentificación
  private apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
  private apiKey = 'UEVtUAQIDq1e6yQu42CHrGlCumyEaDbW6V9UCC1d';
  // Declaramos el constructor que recibe el servicio HTTPClient para realizar solicitudes a la API
  constructor(private http: HttpClient) {}
  // Declaramos este método para construir la URL con parámetros
  private buildUrl(path: string, params: { [key: string]: string | number }): string {
    // Convertimos los parámetros en una cadena de consulta. Obtenemos un array de pares clave-valor
    const queryParams = Object.entries(params)
      // Utilizamos map para transformar cada par en una cadena
      .map(([key, value]) => `${key}=${encodeURIComponent(value.toString())}`)
      // Con join unimos las cadenas con & que es el separador típico en las cadenas de consulta de URLs
      .join('&');
    // Devolvemos la combinación de la URL base, el path y la cadena de consulta. Añadimos el valor de API KEY
    return `${this.apiUrl}/${path}?api_key=${this.apiKey}&${queryParams}`;
  }
  // Declaramos el método para obtener el listado de los Rovers
  obtenerListadoRovers(): Observable<any> {
    // Utilizamos el método de arriba para obtener la URL completa sin parámetros específicos
    const url = this.buildUrl('', {});
    // Realizamos una solicitud HTTP GET que devolverá un observable con una respuesta de la solicitud
    return this.http.get(url);
  }
  // Declaramos el método para obtener los detalles de cada rover
  obtenerDetalleRover(name: string): Observable<any> {
    // Utilizamos el método de arriba para obtener la URL completa con el nombre del rover
    const url = this.buildUrl(name, {});
    // Realizamos una solicitud HTTP GET que devolverá un observable con una respuesta de la solicitud
    return this.http.get(url);
  }
  // Declaramos el método para obtener las cámaras de cada rover
  obtenerCamarasDeRover(name: string): Observable<any> {
    // Utilizamos el método de arriba para obtener la URL completa con el nombre del rover y el path /cameras
    const url = this.buildUrl(`${name}/cameras`, {});
    // Realizamos una solicitud HTTP GET que devolverá un observable con una respuesta de la solicitud
    return this.http.get(url);
  }
  // Declaramos el metodo para obtener las fotos de las cámaras de cada rover
  obtenerFotosDeCamara(name: string, sol: number = 0, camera: string = 'FHAZ'): Observable<any> {
    // Utilizamos el método de arriba para obtener la URL completa con los parámetros proporcionados
    const url = this.buildUrl(`${name}/photos`, { sol, camera });
    // Realizamos una solicitud HTTP GET que devolverá un observable con una respuesta de la solicitud
    return this.http.get(url);
  }
  // Declarmos este método para obtener las fotos de una cámara concreta
  obtenerFotosDeCamaraPorNombre(name: string, cameraName: string, sol: number = 0): Observable<any> {
    // Utilizamos el método de arriba para obtener la URL completa con los parámetros proporcionados
    const url = this.buildUrl(`${name}/photos`, { sol, camera: cameraName });
    // Realizamos una solicitud HTTP GET que devolverá un observable con una respuesta de la solicitud
    return this.http.get(url);
  }
}
