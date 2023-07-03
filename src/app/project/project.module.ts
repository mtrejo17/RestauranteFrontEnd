import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RouterModule } from '@angular/router';
import { ProjectRoutes } from './project.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectRoutes),
    FormsModule,
    ReactiveFormsModule,
    UsuariosModule
  ]
})
export class ProjectModule { }
