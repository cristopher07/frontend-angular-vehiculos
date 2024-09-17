import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Permite que Angular lo use sin un módulo específico
})
export class TipoGasolinaService {
  private apiUrl = 'http://localhost:3000/api/vehiculos/tipoCombustible'; // Cambia esto según tu API

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/All`);
  }

  save(tipoCombustible: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, tipoCombustible);
  }

  editById(tipoCombustible: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/editById`, tipoCombustible);
  }

  deleteById(idTipoCombustible: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/deleteById`, { idTipoCombustible });
  }
}
