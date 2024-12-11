import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Functionary } from '../models/functionary';

@Injectable({
  providedIn: 'root'
})
export class FunctionaryService {
  private baseUrl = 'http://localhost:8080/app/api/functionaries';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Functionary[]> {
    return this.http.get<Functionary[]>(this.baseUrl);
  }

  create(functionary: Functionary): Observable<Functionary> {
    return this.http.post<Functionary>(this.baseUrl, functionary);
  }

  update(id: number, functionary: Functionary): Observable<Functionary> {
    return this.http.put<Functionary>(`${this.baseUrl}/${id}`, functionary);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
