import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../services/usuario.service';
import * as _ from 'lodash';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.scss']
})
export class UsuarioModalComponent implements OnInit {

  titulo: string;
  roles: any[] = [];
  formUsuario: FormGroup;
  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  @Input() accion: number;
  @Input() usuario: any;
  async ngOnInit(): Promise<void> {
    if(this.accion === 1) {
      this.titulo = "Nuevo Usuario";
      this.formUsuario = this.formBuilder.group({
        apellidoPaterno: new FormControl(null, Validators.required),
        apellidoMaterno: new FormControl(null, Validators.required),
        nombre: new FormControl(null, Validators.required),
        userName: new FormControl(null, Validators.required),
        role: new FormControl(null, Validators.required)
      });
    } else {
      this.titulo = "Editando Usuario";
      this.formUsuario = this.formBuilder.group({
        apellidoPaterno: new FormControl(this.usuario.apellidoPaterno, Validators.required),
        apellidoMaterno: new FormControl(this.usuario.apellidoMaterno, Validators.required),
        nombre: new FormControl(this.usuario.nombre, Validators.required),
        userName: new FormControl(this.usuario.userName, Validators.required),
        role: new FormControl(this.usuario.role, Validators.required)
      });
    }


    this.roles = await this.usuarioService.getRoles();
    console.log('roles-->', this.roles);
  }


   async sugerirUserName(){
    if(!this.formUsuario.value.nombre) {
      return;
    }
    if(!this.formUsuario.value.apellidoPaterno) {
      return;
    }
    if(!this.formUsuario.value.apellidoMaterno) {
      return;
    }

    let primerNombre = this.formUsuario.value.nombre.split(' ');
    let userName = primerNombre[0].trim().toLowerCase()+this.formUsuario.value.apellidoPaterno.substr(0,1).trim().toLowerCase()+this.formUsuario.value.apellidoMaterno.substr(0,1).trim().toLowerCase();
    let intentos = 0;

    while(await this.usuarioService.validarUserName(userName)){
      intentos++;
      if (intentos > this.formUsuario.value.apellidoPaterno.length) {
        userName = primerNombre[0].trim().toLowerCase()+this.formUsuario.value.apellidoPaterno.trim().toLowerCase()+this.formUsuario.value.apellidoMaterno.substr(0,((intentos - this.formUsuario.value.apellidoPaterno.length) + 1)).trim().toLowerCase();
      } else {
        userName = primerNombre[0].trim().toLowerCase() + this.formUsuario.value.apellidoPaterno.substr(0,(intentos + 1)).trim().toLowerCase()+this.formUsuario.value.apellidoMaterno.substr(0,1).trim().toLowerCase();
      }

    }
    this.formUsuario.controls['userName'].setValue(userName);

  }

  guardar(){
    if(this.accion === 1){
      this.nuevoUsuario();
    } else {
      this.actualizarUsuario();
    }

  }

  nuevoUsuario(){

    if(this.formUsuario.invalid) {

      const controles = this.formUsuario.controls;
      _.forEach(controles, control => {
        control.markAsTouched();
        control.markAsDirty();
      });

      return;
    }

    const nuevoUsuario = {
      apellidoPaterno: this.formUsuario.value.apellidoPaterno.trim().toUpperCase(),
      apellidoMaterno: this.formUsuario.value.apellidoMaterno.trim().toUpperCase(),
      nombre: this.formUsuario.value.nombre.trim().toUpperCase(),
      userName: this.formUsuario.value.userName,
      role: this.formUsuario.value.role
    };
    this.usuarioService.crearUsuario(nuevoUsuario)
    .then(success => {
      Swal.fire({
        title: 'Usuario creado exitosamente',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      this.modal.close(
        {
          creado: true
        }
      );
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario no creado'
      });
    });
  }

  actualizarUsuario(){
    if(this.formUsuario.invalid) {

      const controles = this.formUsuario.controls;
      _.forEach(controles, control => {
        control.markAsTouched();
        control.markAsDirty();
      });

      return;
    }

    const usuarioActualizar = {
      apellidoPaterno: this.formUsuario.value.apellidoPaterno.trim().toUpperCase(),
      apellidoMaterno: this.formUsuario.value.apellidoMaterno.trim().toUpperCase(),
      nombre: this.formUsuario.value.nombre.trim().toUpperCase(),
      userName: this.formUsuario.value.userName,
      role: this.formUsuario.value.role,
      _id: this.usuario._id
    };

    this.usuarioService.actualizarUsuario(usuarioActualizar)
    .then(success => {
      Swal.fire({
        title: 'Usuario actualizado exitosamente',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.modal.close(
        {
          actualizado: true
        }
      );
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario no actualizado'
      });
    });
  }

  cerrar() {
    if(this.accion === 1) {
      this.modal.close(
        {
          creado: false
        }
      );
    } else {
      this.modal.close(
        {
          actualizado: false
        }
      );
    }

  }

}
