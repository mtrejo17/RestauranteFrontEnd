import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioModalComponent } from '../usuario-modal/usuario-modal.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  constructor(
    private ngbModal: NgbModal,
    private usuariosService: UsuariosService
  ) { }

  async ngOnInit(): Promise<void> {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuariosService.obtenerUsuarios()
    .then(usuarios => {
      this.usuarios = usuarios;
      console.log('usuarios-->', this.usuarios);
    })
    .catch(error => {
      this.usuarios = [];
    });
  }

  nuevoUsuario() {
    const modal = this.ngbModal.open(UsuarioModalComponent, {backdrop: 'static',keyboard: false});
    modal.result.then(resp => {

    });
  }

  editarUsuario(usuario: any) {

  }

}
