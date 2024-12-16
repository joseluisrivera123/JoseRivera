import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activities } from '../models/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = 'http://localhost:8080/app/api/activities';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Activities[]> {
    return this.http.get<Activities[]>(this.apiUrl);
  }

  create(activity: Activities): Observable<Activities> {
    return this.http.post<Activities>(this.apiUrl, activity);
  }

  update(id: number, activity: Activities): Observable<Activities> {
    return this.http.put<Activities>(`${this.apiUrl}/${id}`, activity);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
