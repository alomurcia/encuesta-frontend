import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Marca } from '../models/marca';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  constructor(private http: HttpClient) {}

  consultarMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(environment.apiUrl + 'marca');
  }
}
