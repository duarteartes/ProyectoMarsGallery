// Importamos el decorador y otros módulos necesarios de Angular
import { Component } from '@angular/core';
import { ComunicacionAPIService } from '../services/comunicacion-api.service';
import { SessionStorageService } from '../services/session-storage.service';
import { Router } from '@angular/router';

// Utilizamos el decorador para definir el metadata del componente
@Component({
  // El selector identifica este componente en las plantillas
  selector: 'app-formulario-registro',
  // Definimos la ruta del archivo HTML para este componente
  templateUrl: './formulario-registro.component.html',
  // Definimos la ruta del archivo CSS con los estilos para este componente
  styleUrls: ['./formulario-registro.component.css']
})

// Exportamos la clase que representa el componente
export class FormularioRegistroComponent {
  // Definimos las propiedades para almacenar los datos del formulario
  email: string = '';
  username: string = '';
  nombreCompleto: string = '';
  // Definimos las propiedades para almacenar los mensajes de error
  emailError: string = '';
  generalError: string = '';
  // Definimos el constructor del componente que recibe los servicios necesarios
  // Vamos a utilizar aquí la inyección de dependencias
  constructor(
    // Utiliza métodos y propiedades del servicio de comunicación con la API sin tener que crear una instancia nueva
    private apiService: ComunicacionAPIService,
    // Utilizamos métodos y propiedades del servicio sessionStorage para almacenar o recuperar datos ahí
    private sessionStorageService: SessionStorageService,
    // Utilizamos este servicio para redirigir a otras partes de la aplicación después de realizar una acción
    // En este caso nos redirigirá después de un registro de usuario exitoso
    private router: Router
  ) { }
  // Creamos este método para registrar un usuario
  // Utilizamos un método asíncrono donde manejaremos una promesa
  async registrarUsuario(): Promise<void> {
    // Reiniciamos los mensajes de error antes de cada intento
    this.resetErrors();
    // Utilizamos un bloque try/catch para capturar y manejar los errores de manera controlada
    try {
      // Con esta condición validamos que todos los campos del formulario se rellenen
      if (!this.email || !this.username || !this.nombreCompleto) {
        // Si hay algún campo en blanco se muestra un mensaje de error al usuario
        this.generalError = 'No puedes dejar ningún campo en blanco.';
        return;
      }
      // Con esta condición validamos que el formato de correo electrónico sea válido
      if (!this.validateEmail(this.email)) {
        // Si no es así se muestra un mensaje de error al usuario
        this.emailError = 'El formato de correo electrónico no es válido.';
        return;
      }
      // Creamos un objeto con la información del usuario introducida en el formulario
      const datosUsuario = { email: this.email, username: this.username, name: this.nombreCompleto };
      // Realizamos una llamada asíncrona a la API utilizando el servicio apiService
      // Así registramos al usuario con los datos proporcionados
      const respuestaApi = await this.apiService.registrarUsuario(datosUsuario);
      // Creamos una condición para verificar si la respuesta de la API contiene un "id", simulando un registro exitoso
      if (respuestaApi && respuestaApi.id) {
        // Si es así almacenamos los datos del usuario registrado en el sessionStorage
        this.sessionStorageService.guardarDato('usuarioRegistrado', respuestaApi);
      } else {
        // Si no es así mostramos un mensaje de error
        this.generalError = 'Hubo un error al procesar la solicitud';
      }
    // Capturamos cualquier error dentro del bloque try/catch para manejarlo
    } catch (error) {
      // Imprimimos el error en la consola y mostramos un mensaje de error al usuario en la aplicación
      console.error((error as any).message);
      this.generalError = 'Hubo un error al procesar la solicitud';
    }
    // Cuando se registra el usuario se le redirige a la página con el listado de rovers
    // a través del enrutador de Angular
    this.router.navigate(['/rovers']);
  }
  // Creamos este método para reiniciar los mensajes de error
  resetErrors(): void {
    // Establecemos las propiedades a una cadena vacía eliminando cualquier mensaje de error anterior
    this.emailError = '';
    this.generalError = '';
  }
  // Creamos este método para validar el formato del correo electrónico
  validateEmail(email:string): boolean{
    // Definimos una expresión regular para verificar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Utilizamos el método test de la expresión regular para verificar si la cadena "email" cumple con el formato
    // Devuelve true si es válido y false si no lo es
    return emailRegex.test(email);
  }
}