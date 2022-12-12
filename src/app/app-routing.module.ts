import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ConsultarRespuestasComponent } from './modules/principal/components/consultar-respuestas/consultar-respuestas.component';
import { FormularioEncuestaComponent } from './modules/principal/components/formulario-encuesta/formulario-encuesta.component';
import { PrincipalComponent } from './modules/principal/principal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'formulario-encuesta', component: FormularioEncuestaComponent },
  { path: 'consultar-respuestas', component: ConsultarRespuestasComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
