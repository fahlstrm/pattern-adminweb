import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { CityService } from './city.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private _station: any = [];
  private stations = new Subject<any>(); // All stations
  private station = new Subject<any>(); //Only one station
  stationScooters: any = [];
  city: any = []; 
  citySubscrition: Subscription;

  constructor(
    private httpService: HttpService, 
    private http: HttpClient,
    private cityService: CityService,
    ) {
    this.citySubscrition = this.cityService.onSet().subscribe(city => {
      this.city = city;
      this.getStations();
    })
    this.getStations();
  }

  // get stations() {
  //   return of(this._stations);
  // }

  // loadStations() {
  //   this.httpService.getStations().subscribe((data:any) => {
  //     this._stations = data;
  //   })
  //   return this._stations;
  // }

  
  getStations() {
    if(this.city.length != 0) {
      console.log("HÄMTAR STATIONER", this.city[0].name)

      this.httpService.getStations(this.city[0].id).subscribe(
        (data:any) => {
          this.stations.next(data)
        }
      )
    }
    return this.stations.asObservable();
  }

    
  setStation(station: any) {
    console.log("setStation", station)
    this._station = station;
    this.station.next(this._station)
  }

  
  onSet(): Observable<any> {
    return this.station.asObservable();
  }


  // getStations(): Observable<any> {
  //   this.httpService.getStations().subscribe((data:any) => {
  //     this.subject.next(data);
  //   });
  //   return this.subject.asObservable();
  // }

}
