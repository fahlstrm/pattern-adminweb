import { Injectable } from '@angular/core';
import { Subject, Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Scooter } from '../Scooter';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {

  private _scooters: any = [];

  private subject = new Subject<any>();


  constructor(private httpService: HttpService, private http: HttpClient ) {
    this.loadScooters();
  }


    // //Will return _cites as an Observable. call cityService.cities | async in order to loop the array
    // get scooters() {
    //   return of(this._scooters);
    // }

    // getScooters()  {
    //   this.httpService.getScooters().subscribe((data:any) => {
    //     this._scooters = data;
    //   })
    //   return this._scooters;
    // }
      get scooters() {
        return of(this._scooters);
      }

    loadScooters() {
      this.httpService.getScooters().subscribe((data:any) => {
        this._scooters = data;
      })
      return this._scooters;
    }

    getScooters(): Observable<any> {
      this.httpService.getScooters().subscribe((data:any) => {
        this.subject.next(data);
      });
      return this.subject.asObservable();
    }
    // startScooterSubscription(): void  {
    //   this.http.get<any>(`${this.httpService.baseUrl}/scooters`);
    //   this.allScootersSubject.next(this.allScooters)
    // }

}
