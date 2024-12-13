import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FunctionaryAdolescentService {
  private apiUrl = 'http://localhost:8080/app/api/functionary-adolescents'; // Cambia esto si tu backend tiene otra URL

  constructor(private http: HttpClient) {}

  getFunctionaries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/functionaries`);
  }

  getTeens(): Observable<any> {
    return this.http.get(`${this.apiUrl}/teens`);
  }

  getAssignments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/functionary-teen-assignments`);
  }

  assignTeensToFunctionary(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/functionary-teen-assignments`, data);
  }
  
}

