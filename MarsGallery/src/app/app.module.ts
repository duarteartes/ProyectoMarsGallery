// Importamos los módulos necesarios para que la aplicación funcione
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarsGalleryModule } from './mars-gallery/mars-gallery.module';
import { NasaModule } from './nasa/nasa.module';
import { HttpClientModule } from '@angular/common/http';

// Definimos el decorador, que definirá el metadata del módulo
@NgModule({
  // Declaramos los componentes
  declarations: [
    AppComponent
  ],
  // Importamos los módulos con las clases que se necesitan para los componentes declarados en el módulo
  imports: [
    // Módulo que proporciona los servicios esenciales para ejecutar la aplicación en el navegador
    BrowserModule,
    // Módulo de enrutamiento de la aplicación
    AppRoutingModule,
    // Importamos los módulos personalizados
    MarsGalleryModule,
    NasaModule,
    // Módulo para manejar el enrutamiento
    RouterModule,
    // Módulo para realizar las solicitudes HTTP
    HttpClientModule
  ],
  // Declaramos los proveedores de servicios que se utilizarán para la inyección de dependencias
  providers: [],
  // Declaramos el componente principal que debe ser inicializado cuando la aplicación se inicie
  bootstrap: [AppComponent]
})
// Exportamos la clase que representa el módulo principal de la aplicación
export class AppModule { }