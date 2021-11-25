import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from "rxjs";
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
    private cityService: CityService,
    ) {
    this.citySubscrition = this.cityService.onSet().subscribe(city => {
      this.city = city;
      this.getStations();
    })
    this.getStations();
  }
  
  getStations(): Observable<any> {
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

    
  setStation(station: any): any  {
    console.log("setStation", station)
    this._station = station;
    this.station.next(this._station)
  }

  
  onSet(): Observable<any> {
    return this.station.asObservable();
  }

}
