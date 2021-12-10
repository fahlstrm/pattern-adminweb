import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cities`, { withCredentials: true });
  }

  getScooters(city: any): Observable<any> {
    console.log(city)
    return this.http.get<any>(`${this.baseUrl}/cities/${city}/scooters`, { withCredentials: true });
  }

  getAllScooters(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/scooters`);
  }

  getOneScooter(scooter: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/scooters/${scooter.id}`);
  }

  // Ändrar status för scooter
  changeScooterStatus(scooter: any): any {
    const body = {
      "status": scooter.status
    }
    return this.http.put<any>(`${this.baseUrl}/scooters/${scooter.id}`, body)
    .subscribe({
      next: res => {
        return res;
      },
      error: error => {
        console.error('There was an error!', error);
        console.log("ERROR")
      }
    });
  }
  
  //Tar bort scooter från laddstation, batteri till 100 och status till active
  removeScooterFromLoading(scooter: any): any {
    const body = {
      "status": scooter.status,
      "battery_level": scooter.battery_level
    }
    return this.http.put<any>(`${this.baseUrl}/scooters/${scooter.id}`, body)
    .subscribe({
      next: res => {
        return res;
      },
      error: error => {
        console.error('There was an error!', error);
        console.log("ERROR")
      }
    });
  }

  moveScooterToPark(scooter: any): any {
    const body = {
      "station_id": scooter.station_id,
      "lat_pos": scooter.lat_pos,
      "lon_pos": scooter.lon_pos,
      "status": scooter.status
    }
    return this.http.put<any>(`${this.baseUrl}/scooters/${scooter.id}`, body)
    .subscribe({
      next: res => {
        return res;
      },
      error: error => {
        console.error('There was an error!', error);
        console.log("ERROR")
      }
    });
  }

  getStations(city: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/cities/${city}/stations`, { withCredentials: true });
  }

  getStationScooters(station: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/stations/${station}/scooters`);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`, { withCredentials: true });
  }

  //Get one user by id 
  getUser(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`, { withCredentials: true });
  }

  //Get log for specific user
  getUserLog(id:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}/logs`, { withCredentials: true });
  }

  //get log
  getLog(): Observable<any> {
    return this.http.get(`${this.baseUrl}/logs`, { withCredentials: true });
  }

  
  // Checks if admin is authorized
  checkAdminAuth(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/github/check-usertype`, { withCredentials: true });
  }

  // Redirects user to GitHub for login
  githubRedirect(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/github/redirect/admin`, { withCredentials: true });
  }
  


}
