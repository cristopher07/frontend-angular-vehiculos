import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Permite que Angular lo use sin un módulo específico
})
export class TipoPlacaService {
  private apiUrl = 'http://localhost:3000/api/vehiculos/placa'; // Cambia esto según tu API

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/All`);
  }

  save(placa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, placa);
  }

  editById(placa: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/editById`, placa);
  }

  deleteById(idTipoPlaca: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/deleteById`, { idTipoPlaca });
  }
}
