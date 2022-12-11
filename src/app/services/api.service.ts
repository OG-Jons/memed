import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getHealth(): Observable<any> {
    return this.http.get(`${this.url}/health`, { observe: 'response' });
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(`${this.url}${path}`, body, { observe: 'response' });
  }

  get(path: string): Observable<any> {
    return this.http.get(`${this.url}${path}`, { observe: 'response' });
  }
}
