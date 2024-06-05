// Importamos el decorador injectable
import { Injectable } from '@angular/core';

// Utilizamos el decorador para marcar la clase como un servicio inyectable en Angular
@Injectable({
  providedIn: 'root'
})

// Exportamos y definimos la clase de este servicio
export class SessionStorageService {
  // Tenemos un constructor que no realiza ninguna operación al instanciarlo
  constructor() { }
  // Definimos un método para guardar un dato en el sessionStorage
  guardarDato(key: string, valor: any): void {
    // Utilizamos JSON para convertir el valor a una cadena JSON antes de almacenarlo
    // Realizamos esta acción porque sessionStorage solamente puede almacenar cadenas de texto
    sessionStorage.setItem(key, JSON.stringify(valor));
  }
  // Definimos este método para obtener un dato del sessionStorage
  obtenerDato(key: string): any {
    // Obtenemos el valor asociado a la clave key del sessionStorage
    const data = sessionStorage.getItem(key);
    // Utilizamos JSON para recuperar el valor almacenado y convertirlo de una cadena JSON a su tipo original
    // Si no hay un valor asociado retorna null
    return data ? JSON.parse(data) : null;
  }
}