import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
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
      modal.componentInstance.accion = 1;
      modal.result.then(success => {
        if(success.creado) {
          this.cargarUsuarios();
        }
      })
      .catch(error => {

      });
  }

  editarUsuario(usuario: any) {
    const modal = this.ngbModal.open(UsuarioModalComponent, {backdrop: 'static', keyboard: false});
      modal.componentInstance.accion = 2;
      modal.componentInstance.usuario = usuario;
      modal.result.then(success => {
        if(success.actualizado) {
          this.cargarUsuarios();
        }
      })
      .catch(error => {

      });
  }

  activarUsuario(usuario: any) {
    Swal.fire({
      title: 'Desea activar Usuario?',
      showDenyButton: true,
      confirmButtonText: 'Activar',
      denyButtonText: `No Activar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuarioService.activarUsuario(usuario._id)
        .then(success => {
          this.cargarUsuarios();
          Swal.fire('Activado!', 'Usuario activado', 'success');
        })
        .catch(error => {
          Swal.fire('No Activado!', 'Usuario no activado', 'error');
        })

      }
    });
  }

  desactivarusuario(usuario: any) {
    Swal.fire({
      title: 'Desea desactivar Usuario?',
      showDenyButton: true,
      confirmButtonText: 'Desactivar',
      denyButtonText: `No Desactivar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuarioService.desactivarUsuario(usuario._id)
        .then(success => {
          this.cargarUsuarios();
          Swal.fire('Desactivado!', 'Usuario desactivado', 'success');
        })
        .catch(error => {
          Swal.fire('No Desactivado!', 'Usuario no desactivado', 'error');
        })

      }
    });
  }

  reestablecarPassword(usuario: any) {
    Swal.fire({
      title: 'Desea reestablecer constrasena?',
      showDenyButton: true,
      confirmButtonText: 'Si reestableerla',
      denyButtonText: `No Reestablecer`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuarioService.reestablecarPassword(usuario._id)
        .then(success => {
          Swal.fire('Reestablecida!', 'Contrasena Reestablecida', 'success');
        })
        .catch(error => {
          Swal.fire('No Reestablecida!', 'Contrasena  no Reestablecida', 'error');
        });
      }
    });
  }

}
