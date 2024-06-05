// Importamos el decorador injectable y los servicios necesarios
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionStorageService } from '../../mars-gallery/services/session-storage.service';

// Utilizamos el decorador para marcar la clase como un servicio inyectable en Angular
@Injectable({
  providedIn: 'root'
})

// Exportamos y definimos la clase de este servicio
// Implementamos la interfaz canActivate, necesaria para crear un guard de ruta
export class ComprobarUsuarioGuard implements CanActivate {
  // Creamos el constructor que recibe instancias de dos servicios
  // SessionStorage lo utilizamos para verificar si hay un usuario registrado
  // Router lo utilizamos para redirigir al usuario si no hay un usuario registrado
  constructor(private sessionStorageService: SessionStorageService, private router: Router) {}
  // Llamamos a este método cuando se intenta activar una ruta. Toma dos argumentos y devuelve un booleano
  // Route representa la ruta, y state el estado actual del enrutador
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const usuarioRegistrado = this.sessionStorageService.obtenerDato('usuarioRegistrado');
    if (usuarioRegistrado) {
      // Mostramos un saludo si hay información en el sessionStorage
      const nombreCompleto = usuarioRegistrado.nombreCompleto;
      alert(`¡Hola! Bienvenido a la Mars Gallery`);
      return true;
    } else {
      // Mostramos un mensaje de error si no hay información en el sessionStorage
      alert('Error: No hay información de usuario. Por favor, regístrate.');
      this.router.navigate(['/inicio']);
      return false;
    }
  }
}