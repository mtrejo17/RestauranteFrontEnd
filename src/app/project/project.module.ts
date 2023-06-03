import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RouterModule } from '@angular/router';
import { ProjectRoutes } from './project.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectRoutes),
    UsuariosModule
  ]
})
export class ProjectModule { }
