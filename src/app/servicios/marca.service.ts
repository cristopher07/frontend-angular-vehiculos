import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Permite que Angular lo use sin un módulo específico
})
export class MarcaService {
  private apiUrl = 'http://localhost:3000/api/vehiculos/marca'; // Cambia esto según tu API

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/All`);
  }

  save(color: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, color);
  }

  editById(color: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/editById`, color);
  }

  deleteById(idMarca: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/deleteById`, { idMarca });
  }
}
