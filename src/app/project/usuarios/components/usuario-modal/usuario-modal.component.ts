import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../services/usuario.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.scss']
})
export class UsuarioModalComponent implements OnInit {

  titulo = "Nuevo usuario";
  roles: any[] = [];
  formUsuario: FormGroup;
  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  async ngOnInit(): Promise<void> {
    this.formUsuario = this.formBuilder.group({
      apellidoPaterno: new FormControl(null, Validators.required),
      apellidoMaterno: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required)
    });
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
    this.nuevoUsuario();
  }

  nuevoUsuario(){
    console.log('formUsuario-->', this.formUsuario);
    if(this.formUsuario.invalid) {

      const controles = this.formUsuario.controls;
      _.forEach(controles, control => {
        control.markAsTouched();
        control.markAsDirty();
      });

      return;
    }

  }

  cerrar() {
    this.modal.close();
  }

}
