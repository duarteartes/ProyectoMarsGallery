import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { SessionStorageService } from './services/session-storage.service';

const routes: Routes = [
  { path: 'formulario-registro', component: FormularioRegistroComponent }
];

@NgModule({
  declarations: [FormularioRegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SessionStorageService
  ],
  exports: [RouterModule]
})
export class MarsGalleryModule { }