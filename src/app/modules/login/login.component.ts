import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credencial } from 'src/app/core/models/credencial';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credenciales: Credencial = { usuario: '', contrasena: '' };
  loginValid = true;
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.autenticar(this.credenciales, () => {
      this.router.navigateByUrl('/');
    });
    this.loginValid = false;
    return false;
  }
}
