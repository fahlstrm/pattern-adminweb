import { Injectable } from '@angular/core';
import { Subject, Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Scooter } from '../Scooter';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {
  
  _scooters: any = [];

  constructor(private httpService: HttpService, private http: HttpClient ) { 
    this.getScooters();
  }


    //Will return _cites as an Observable. call cityService.cities | async in order to loop the array
    get scooters() {
      return of(this._scooters);
    }

    // getScooters()  {
    //   this.httpService.getScooters().subscribe((data:any) => {
    //     this._scooters = data;
    //   })
    //   return this._scooters;
    // }
    getScooters(): Observable<Scooter[]>  {
      return this.http.get<any>(`${this.httpService.baseUrl}/scooters`);
    }
}
