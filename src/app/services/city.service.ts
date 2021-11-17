import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class CityService {
  _cities: any = [
    {
      "id": 1,
      "name": "Skövde",
      "lat_pos": 58.1815656,
      "lon_pos": 13.9546027
    },
    {
      "id": 2,
      "name": "Lund",
      "lat_pos": 55.7048771,
      "lon_pos": 13.190846
    },
    {
      "id": 3,
      "name": "Uppsala",
      "lat_pos": 59.859589,
      "lon_pos": 17.6363316
    }
  ]  

  constructor() { }

  //Will return _cites as an Observable. call cityService.cities | async in order to loop the array
  get cities() {
    return of(this._cities);
  }

}
