import { Routes} from "@angular/router";
import { UsuariosComponent } from "./usuarios/components/usuarios/usuarios.component";
import { EsAdministradorGuard } from "./security/guards/es-administrador.guard";

export const ProjectRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: {
          title: 'Usuarios',
          urls: [
            {title: 'Configuracion', url: '/configuracion'},
            {title: 'Usuarios'}
          ]
        }
      }
    ]
  }
];
