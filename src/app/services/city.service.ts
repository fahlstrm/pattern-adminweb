import { Injectable } from '@angular/core';
import { Subject, Observable, of} from "rxjs";
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  private subject = new Subject<any>();
  private _cities: any = [];
  private _city = ``;

  constructor(private httpService: HttpService) { 
    this.loadCitites();
  }

  /**
   * Will return _cites as an Observable. call cityService.cities | async in order to loop the array
   * Can also be reached by this.variable = cityService.citeis;
   * Or cityService.citites.subscribe(city => this.city = city);
   */
  get cities(): any {
    return of(this._cities);
  }

  get city(): any {
    return of(this._city);
  }

  //Set current city
  setCity(name: string): any {
    this._city = this._cities.filter((city:any) => {
      return city.name == name
    })
    this.subject.next(this._city)
  }

  onSet(): Observable<any> {
    return this.subject.asObservable();
  }
  
  // Get all cities
  getCities(): Observable<any> {
    this.httpService.getCities().subscribe((data:any) => {
      this.subject.next(data);
    });
    return this.subject.asObservable();
  }

  loadCitites(): any {
    this.httpService.getCities().subscribe((data:any) => {
      this._cities = data;
    })
    return this._cities;
  }

}
