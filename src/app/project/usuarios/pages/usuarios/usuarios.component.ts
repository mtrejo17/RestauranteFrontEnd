import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(
    private usuariosService: UsuariosService
  ) { }

  async ngOnInit(): Promise<void> {
    var usuarios = await this.usuariosService.obtenerUsuarios();
    console.log('usuarios-->', usuarios);
  }

}
