import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teen } from '../models/teen';

@Injectable({
  providedIn: 'root'
})
export class TeenService {
  private apiUrl = 'http://localhost:8080/app/api/teens';  // Asegúrate de que esta URL sea la correcta para tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los adolescentes
  getAll(): Observable<Teen[]> {
    return this.http.get<Teen[]>(this.apiUrl);
  }

  // Crear un nuevo adolescente
  create(teen: Teen): Observable<Teen> {
    return this.http.post<Teen>(this.apiUrl, teen);
  }

  update(id: number, teen: Teen): Observable<Teen> {
    return this.http.put<Teen>(`${this.apiUrl}/${id}`, teen);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
