import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FunctionaryAdolescentService {
  private apiUrl = 'http://localhost:8080/app/api/functionary-adolescents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  save(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
