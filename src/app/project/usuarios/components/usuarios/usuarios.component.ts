import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioModalComponent } from '../usuario-modal/usuario-modal.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: any [] = [];

  constructor(
    private usuarioService: UsuarioService,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.getUsuarios()
    .then(usuarios => {
      this.usuarios = usuarios;
    })
    .catch(error => {

    });
  }

  nuevoUsuario() {
      console.log('nuevo Usuario');
      const modal = this.ngbModal.open(UsuarioModalComponent, {backdrop: 'static', keyboard: false});
      modal.result.then(success => {

      })
      .catch(error => {

      });
  }

}
