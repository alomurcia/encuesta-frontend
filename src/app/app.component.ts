import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'encuesta-frontend';
  autenticado = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.inicio();
  }

  inicio() {
    this.autenticado = this.auth.esUsuarioLogeado();
    if (!this.autenticado) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/');
    }
  }
  logout() {
    this.auth.logout();
    this.autenticado = false;
    this.router.navigateByUrl('/login');
  }
}
