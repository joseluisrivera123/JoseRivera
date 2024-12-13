import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Functionary } from '../models/functionary';

@Injectable({
  providedIn: 'root'
})
export class FunctionaryService {
  private apiUrl = 'http://localhost:8080/app/api/functionaries';  // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) {}

  getAll(): Observable<Functionary[]> {
    return this.http.get<Functionary[]>(this.apiUrl);
  }

  create(functionary: Functionary): Observable<Functionary> {
    return this.http.post<Functionary>(this.apiUrl, functionary);
  }

  update(id: number, functionary: Functionary): Observable<Functionary> {
    return this.http.put<Functionary>(`${this.apiUrl}/${id}`, functionary);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
