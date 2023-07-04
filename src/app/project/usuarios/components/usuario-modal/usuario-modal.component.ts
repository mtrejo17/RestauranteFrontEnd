import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.scss']
})
export class UsuarioModalComponent implements OnInit {

  titulo = "Nuevo usuario";
  formUsuario: FormGroup;
  constructor(
    public modal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    /*
       apellidoPaterno: {
            type: String,
            required: [true, 'apellidoPaterno requerido']
        },
        apellidoMaterno: {
            type: String,
            required: [true, 'apellidoMaterno requerido']
        },
        nombre: {
            type: String,
            required: [true, 'nombre requerido']
        },
        userName: {
            type: String,
            unique: true,
            required: [true, 'userName requerido']
        },
        password: {
            type: String,
            required: [true, 'password requerido']
        },
        role : {
            type: String,
            enum: validRoles,
            required: [true, 'role requerido']
        }
    */
    this.formUsuario = this.formBuilder.group({
      apellidoPaterno: new FormControl(null, Validators.required),
      apellidoMaterno: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required)
    });
  }


  sugerirUserName(){
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
    this.formUsuario.controls['userName'].setValue(userName);
  }

  guardar(){

  }

  cerrar() {
    this.modal.close();
  }

}
