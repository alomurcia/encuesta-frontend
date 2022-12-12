import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Encuesta } from 'src/app/core/models/encuesta';
import { Marca } from 'src/app/core/models/marca';
import { EncuestaService } from 'src/app/core/services/encuesta.service';
import { MarcaService } from 'src/app/core/services/marca.service';

@Component({
  selector: 'app-consultar-respuestas',
  templateUrl: './consultar-respuestas.component.html',
  styleUrls: ['./consultar-respuestas.component.css'],
})
export class ConsultarRespuestasComponent implements OnInit {
  marcas: Marca[] = [];
  encuestas: Encuesta[] = [];
  datasource = new MatTableDataSource<Encuesta>([]);
  displayedColumns: string[] = [
    'numDocumento',
    'email',
    'comentarios',
    'marca',
    'fechaRespuesta',
    'acciones',
  ];
  constructor(
    private marcaService: MarcaService,
    private encuestaService: EncuestaService
  ) {}
  ngOnInit(): void {
    this.marcaService.consultarMarcas().subscribe(
      (response) => {
        this.marcas = response;
      },
      (error) => {
        console.error(error);
      }
    );
    this.encuestaService.getEncuestas().subscribe(
      (response) => {
        this.encuestas = response;
        this.datasource.data = this.encuestas;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  findMarca(idMarca: number): string {
    let marca = this.marcas.find((marca) => marca.id === idMarca);
    return marca ? marca.nombre : '';
  }

  eliminar(idEncuesta: number): void {
    this.encuestaService.eliminar(idEncuesta).subscribe(
      () => {
        let index = this.encuestas.findIndex(
          (encuesta) => encuesta.id === idEncuesta
        );
        this.encuestas.splice(index, 1);
        this.datasource.data = this.encuestas;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
