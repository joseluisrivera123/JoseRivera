import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Functionary } from '../models/functionary';
import { Teen } from '../models/teen';

@Injectable({
  providedIn: 'root'
})
export class FunctionaryTeenService {

  private apiUrl = 'http://localhost:8080/app/api/functionary-teen';  // URL del backend

  constructor(private http: HttpClient) { }

  getFunctionaries(): Observable<Functionary[]> {
    return this.http.get<Functionary[]>(`${this.apiUrl}/functionaries`);
  }

  getTeens(): Observable<Teen[]> {
    return this.http.get<Teen[]>(`${this.apiUrl}/teens`);
  }

  associateTeensToFunctionary(functionaryId: number, teenIds: number[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/functionaries/${functionaryId}/teens`, { teenIds });
  }
}
