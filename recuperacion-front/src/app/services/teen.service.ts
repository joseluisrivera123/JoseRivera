import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teen } from '../models/teen';

@Injectable({
  providedIn: 'root'
})
export class TeenService {
  private apiUrl = 'http://localhost:8080/app/api/teens';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Teen[]> {
    return this.http.get<Teen[]>(this.apiUrl);
  }

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
