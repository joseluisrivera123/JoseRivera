import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignacion } from '../models/asignacion';

@Injectable({
  providedIn: 'root',
})
export class AsignacionService {
  private apiUrl = 'http://localhost:8080/app/api/asignaciones';

  constructor(private http: HttpClient) {}

  // Obtener todas las asignaciones
  getAll(): Observable<Asignacion[]> {
    return this.http.get<Asignacion[]>(this.apiUrl);
  }

  // Crear una nueva asignación
  create(asignacion: Asignacion): Observable<Asignacion> {
    return this.http.post<Asignacion>(this.apiUrl, asignacion);
  }

  // Actualizar una asignación existente
  update(id: number, asignacion: Asignacion): Observable<Asignacion> {
    return this.http.put<Asignacion>(`${this.apiUrl}/${id}`, asignacion);
  }

  // Eliminar una asignación por ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

