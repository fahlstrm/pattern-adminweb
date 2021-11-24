import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get<any>(`${this.baseUrl}/cities`);
  }

  getScooters(city: any) {
    console.log(city)
    return this.http.get<any>(`${this.baseUrl}/cities/${city}/scooters`);
  }

  getAllScooters() {
    return this.http.get<any>(`${this.baseUrl}/scooters`);
  }

  async getOneScooter(scooter: any) {
    return this.http.get(`${this.baseUrl}/scooters/${scooter.id}`);
  }

  changeScooterStatus(scooter: any) {
    let body = {
      "status": scooter.status
    }
    return this.http.put<any>(`${this.baseUrl}/scooters/${scooter.id}`, body)
    .subscribe({
      next: res => {
        return "hej"
      },
      error: error => {
        console.error('There was an error!', error);
        console.log("ERROR")
      }
    });
  }

  moveScooterToPark(scooter: any) {
    let body = {
      "station_id": scooter.station_id,
      "lat_pos": scooter.lat_pos,
      "lon_pos": scooter.lon_pos,
      "status": scooter.status
    }
    return this.http.put<any>(`${this.baseUrl}/scooters/${scooter.id}`, body)
    .subscribe({
      next: res => {
        return "hej"
      },
      error: error => {
        console.error('There was an error!', error);
        console.log("ERROR")
      }
    });
  }

  getStations(city: any) {
    return this.http.get<any>(`${this.baseUrl}/cities/${city}/stations`);
  }

  getStationScooters(station: any) {
    return this.http.get(`${this.baseUrl}/stations/${station}/scooters`);
  }


  getUsers() {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

}
