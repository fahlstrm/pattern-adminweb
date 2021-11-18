import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get<any>(`${this.baseUrl}/cities`);
  }
  
  getScooters() {
    return this.http.get<any>(`${this.baseUrl}/scooters`);
  }
}
