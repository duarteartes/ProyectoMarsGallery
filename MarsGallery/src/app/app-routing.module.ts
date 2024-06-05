// Importamos los módulos y clases necesarias
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importamos los componentes y guards necesarios
import { FormularioRegistroComponent } from './mars-gallery/formulario-registro/formulario-registro.component';
import { ListadoRoversComponent } from './nasa/listado-rovers/listado-rovers.component';
import { DetalleRoverComponent } from './nasa/detalle-rover/detalle-rover.component';
import { ComprobarUsuarioGuard } from './nasa/guards/comprobar-usuario.guard';
import { ListadoCamarasComponent } from './nasa/listado-camaras/listado-camaras.component';
import { ListadoFotosComponent } from './nasa/listado-fotos/listado-fotos.component';

// Definimos las rutas. Se crea un array para representar las rutas de la aplicación. Tenemos varias propiedades
// Path es la ruta de la URL
// Component es el componente asociado a la ruta
// CanActivate es un array con los guards de la ruta
// Children son las rutas hijas asociadas a una ruta padre
const routes: Routes = [
  // Ruta para la página de inicio, asociada al componente Formulario de resgistro
  { path: 'inicio', component: FormularioRegistroComponent },
  // Ruta para la página de los rovers utilizamos un guard para ejecutarlo antes de permitir el acceso a esta sección
  // Tenemos una serie de rutas hijas asociadas a esta ruta
  { path: 'rovers',
    canActivate: [ComprobarUsuarioGuard],
    children: [
      // En esta ruta mostraremos el componente con el listado de los rovers
      { path: '', component: ListadoRoversComponent },
      // En esta ruta tenemos parámetros dinámicos y en ella mostraremos la galería con las fotos de cada cámara
      { path: ':name/camaras/:cameraName/galeria', component: ListadoFotosComponent },
      // En esta ruta tenemos parámetros dinámicos y en ella mostraremos el listado con las cámaras de cada rover
      { path: ':name/camaras', component: ListadoCamarasComponent },
      // En esta ruta tenemos parámetros dinámicos que mostrará los detalles de cada rover
      { path: ':name', component: DetalleRoverComponent },
    ]
  },
  // Esta es la ruta por defecto que nos redirigirá a la página de inicio cuando la URL este vacía
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

// Declaramos el decorador para el módulo de rutas
@NgModule({
  // Importamos la configuración de las rutas principales del módulo
  imports: [RouterModule.forRoot(routes)],
  // Exportamos el módulo de rutas para poder utilizarlo en otros módulos
  exports: [RouterModule]
})

// Exportamos la clase que representa el módulo de rutas
export class AppRoutingModule {}