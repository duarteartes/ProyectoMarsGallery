// Importamos el decorador injectable
import { Injectable } from '@angular/core';

// Utilizamos el decorador para marcar la clase como un servicio inyectable en Angular
@Injectable({
  providedIn: 'root'
})

// Exportamos y definimos la clase de este servicio
export class ComunicacionAPIService {
  // Declaramos una propiedad que contiene la URL de la API a la que vamos a realizar las peticiones
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  // Tenemos un constructor que no realiza ninguna operación al instanciarlo
  constructor() { }
  // Creamos un método asíncrono para realizar peticiones HTTP para registrar un usuario.
  async registrarUsuario(datos: any): Promise<any> {
    // Utilizamos un bloque try/catch para capturar y manejar las excepciones
    try {
      // Realizamos la petición HTTP POST utilizando la URL de la API a través de la función fetch
      const response = await fetch(this.apiUrl, {
        // El método POST se utiliza comunmente para enviar datos a un servidor
        method: 'POST',
        // Aquí tendremos el cuerpo de la petición
        body: JSON.stringify(datos),
        // Configuramos los encabezados de la solicitud
        // Se están enviando datos en formato JSON y especificando la codificación de carácteres
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      // Con esta condición verificamos si la respuesta no es exitosa y lanzamos un mensaje de error
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.statusText}`);
      }
      // Convertimos la respuesta JSON de la petición en un objeto de JavaScript
      const responseData = await response.json();
      // Retornamos los datos obtenidos de la respuesta
      return responseData;
    // Lanzamos una excepción con un mensaje de error personalizado
    } catch (error: any) {
      throw new Error(`Error en la petición: ${error.message}`);
    }
  }
}