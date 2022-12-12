import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FormularioEncuestaComponent } from './components/formulario-encuesta/formulario-encuesta.component';
import { ConsultarRespuestasComponent } from './components/consultar-respuestas/consultar-respuestas.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    PrincipalComponent,
    FormularioEncuestaComponent,
    ConsultarRespuestasComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    RouterModule,
    FormsModule,
  ],
})
export class PrincipalModule {}
