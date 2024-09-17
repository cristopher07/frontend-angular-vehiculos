import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Permite que Angular lo use sin un módulo específico
})
export class VehiculosService {
  private apiUrl = 'http://localhost:3000/api/vehiculos'; // Cambia esto según tu API

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/All`);
  }

  save(vehiculo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, vehiculo);
  }

  editById(vehiculo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/editById`, vehiculo);
  }

  deleteById(idVehiculo: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/deleteById`, { idVehiculo });
  }
}
