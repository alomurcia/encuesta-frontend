import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encuesta } from 'src/app/core/models/encuesta';
import { Marca } from 'src/app/core/models/marca';
import { EncuestaService } from 'src/app/core/services/encuesta.service';
import { MarcaService } from 'src/app/core/services/marca.service';

@Component({
  selector: 'app-formulario-encuesta',
  templateUrl: './formulario-encuesta.component.html',
  styleUrls: ['./formulario-encuesta.component.css'],
})
export class FormularioEncuestaComponent implements OnInit {
  encuesta: Encuesta = {
    email: '',
    comentarios: '',
  };
  marcas: Marca[] = [];
  constructor(
    private marcaService: MarcaService,
    private encuestaService: EncuestaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.marcaService.consultarMarcas().subscribe((response) => {
      this.marcas = response;
    });
  }

  registrar(): void {
    this.encuestaService.registrar(this.encuesta).subscribe(
      (response) => {
        this.encuesta = response;
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
