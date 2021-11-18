import { Injectable } from '@angular/core';
import { Subject, Observable, of} from "rxjs";
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class ScooterService {
  _scooters: any = [];

  constructor(private httpService: HttpService) { 
    this.getScooters();
  }


    //Will return _cites as an Observable. call cityService.cities | async in order to loop the array
    get scooters() {
      return of(this._scooters);
    }

    getScooters() {
      this.httpService.getScooters().subscribe((data:any) => {
        this._scooters = data;
      })
      return this._scooters;
    }
}
