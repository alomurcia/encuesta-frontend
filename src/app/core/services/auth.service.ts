import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credencial } from '../models/credencial';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private AUTH_SESSION = 'encuestaAuth';

  constructor(private http: HttpClient) {}

  autenticar(
    credenciales: Credencial | undefined,
    callback: Function | undefined
  ) {
    const headers = new HttpHeaders(
      credenciales
        ? {
            authorization:
              'Basic ' +
              btoa(credenciales.usuario + ':' + credenciales.contrasena),
          }
        : {}
    );

    this.http
      .get<string>(environment.apiUrl + 'basicauth', { headers: headers })
      .subscribe((response: string) => {
        sessionStorage.setItem(
          this.AUTH_SESSION,
          btoa(credenciales?.usuario + ':' + credenciales?.contrasena)
        );
        return callback && callback();
      });
  }

  esUsuarioLogeado(): boolean {
    let user = sessionStorage.getItem(this.AUTH_SESSION);
    if (user === null) return false;
    return true;
  }

  getAuthSession() {
    let user = sessionStorage.getItem(this.AUTH_SESSION);
    if (user === null) return '';
    return user;
  }

  logout() {
    sessionStorage.removeItem(this.AUTH_SESSION);
  }
}
