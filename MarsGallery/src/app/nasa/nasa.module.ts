import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListadoRoversComponent } from './listado-rovers/listado-rovers.component';
import { DetalleRoverComponent } from './detalle-rover/detalle-rover.component';
import { ComprobarUsuarioGuard } from './guards/comprobar-usuario.guard';
import { ComunicacionNasaService } from './services/comunicacion-nasa.service';
import { ListadoCamarasComponent } from './listado-camaras/listado-camaras.component';
import { ListadoFotosComponent } from './listado-fotos/listado-fotos.component'; // Agrega ListadoFotosComponent aquí

const routes = [
  { path: 'rovers', component: ListadoRoversComponent, canActivate: [ComprobarUsuarioGuard] },
  { path: 'rover/:name', component: DetalleRoverComponent, canActivate: [ComprobarUsuarioGuard] },
  { path: 'rover/:name/camaras/:cameraName', component: ListadoFotosComponent } // Agrega esta línea
];

@NgModule({
  declarations: [
    ListadoRoversComponent,
    DetalleRoverComponent,
    ListadoCamarasComponent,
    ListadoFotosComponent // Agrega ListadoFotosComponent aquí
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [ComunicacionNasaService, ComprobarUsuarioGuard],
  exports: [ListadoCamarasComponent, DetalleRoverComponent, ListadoFotosComponent], // Asegúrate de exportar ListadoFotosComponent si es necesario
})
export class NasaModule {}
