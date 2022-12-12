import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Encuesta } from '../models/encuesta';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncuestaService {
  constructor(private http: HttpClient) {}

  getEncuestas(): Observable<Encuesta[]> {
    return this.http.get<Encuesta[]>(environment.apiUrl + 'encuesta');
  }

  registrar(encuesta: Encuesta): Observable<Encuesta> {
    return this.http.post<Encuesta>(environment.apiUrl + 'encuesta', encuesta);
  }

  eliminar(idEncuesta: number): Observable<void> {
    return this.http.delete<void>(
      environment.apiUrl + 'encuesta/' + idEncuesta
    );
  }
}
