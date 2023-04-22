
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  obtenerUsuarios(): Promise<any> {
    const url = environment.apiUrl + '/usuario';
    return new Promise((resolve,reject) => {
      this.httpClient.get(url).toPromise()
      .then((success: any) => {
        resolve(success.usuarios);
      })
      .catch(error => {
        reject(error);
      })
    });
  }
}
