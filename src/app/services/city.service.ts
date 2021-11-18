import { Injectable } from '@angular/core';
import { Subject, Observable, of} from "rxjs";
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  private subject = new Subject<any>();
  _cities: any = [];

  constructor(private httpService: HttpService) { 
    this.getCities();
  }

  //Will return _cites as an Observable. call cityService.cities | async in order to loop the array
  get cities() {
    return of(this._cities);
  }

  // setCity(id: any) {
  //   this.httpService.getCity(id)
  //   .subscribe((data) => {
  //     this.subject.next(data)
  //   })
  // }

  // onSet(): Observable<any> {
  //   return this.subject.asObservable();
  // }

  getCities() {
    this.httpService.getCities().subscribe((data:any) => {
      this._cities = data;
    })
    return this._cities;
  }

}
