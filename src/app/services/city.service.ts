import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class CityService {
  _cities: any = [
    {
      name: "Skövde", 
    },
    {
      name: "Lund", 
    },
    {
      name: "Uppsala", 
    }
  ];

  constructor() { }

  //Will return _cites as an Observable. call cityService.cities | async in order to loop the array
  get cities() {
    return of(this._cities);
  }

}
