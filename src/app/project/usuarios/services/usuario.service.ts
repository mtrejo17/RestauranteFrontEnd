import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(credenciales: any): Promise<any> {
    const uri = environment.apiUrl + '/login';
    return new Promise((resolve, reject) => {
      this.httpClient.post(uri,credenciales).toPromise()
      .then((success: any) => {
          localStorage.setItem('Authorization', success.token);
          localStorage.setItem('usuario', JSON.stringify(success.usuario));
          resolve(success);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  isLogin(): Promise<boolean>
  {
    const usuario = localStorage.getItem('usuario');
    if(usuario) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  isUserAdministrator(): Promise<boolean>
  {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const usuarioObject = JSON.parse(usuario);
      if (usuarioObject.role === 'root' || usuarioObject.role === 'ADMINISTRADOR') {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    } else {
      return Promise.resolve(false);
    }
  }

  getUsuarios() : Promise<any>
  {
    const uri = environment.apiUrl + '/usuario';
    return new Promise((resolve, reject) =>
    {
      this.httpClient.get(uri).toPromise()
      .then((success: any) => {
          resolve(success.usuarios);
      })
      .catch(error => {
        reject(error);
      })
    });
  }

  validarUserName(userName: string): Promise<boolean>
  {
    const uri = environment.apiUrl + '/validarUserName/' + userName;
    return new Promise ((resolve, reject) => {
      this.httpClient.get(uri).toPromise()
      .then((success: any) => {
        resolve(success.existe);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  getRoles(): Promise<any[]>
  {
    const uri = environment.apiUrl + '/roles';
    return new Promise ((resolve, reject) => {
      this.httpClient.get(uri).toPromise()
      .then((success: any) => {
        resolve(success.roles);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  crearUsuario(usuario: any): Promise<any> {
    const uri = environment.apiUrl + '/usuario';
    return new Promise ((resolve, reject) => {
      this.httpClient.post(uri, usuario).toPromise()
      .then((success: any) => {
        resolve(success);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  actualizarUsuario(usuario: any): Promise<any> {
    const uri = environment.apiUrl + '/usuario/' + usuario._id;
    return new Promise((resolve,reject) => {
      this.httpClient.put(uri, usuario).toPromise()
      .then((success: any) => {
        resolve(success);
      })
      .catch(error => {
        reject(error);
      });
    });
  }

}
