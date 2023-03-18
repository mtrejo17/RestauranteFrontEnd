import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    UsuariosModule
  ]
})
export class ProjectModule { }
