import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, of, Subscription} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { CityService } from './city.service';
import { StationService } from './station.service';
import { Scooter } from '../Scooter';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {

  private _scooters: any = [];

  private subject = new Subject<any>();
  private stationScooters = new Subject<any>();
  city: any = []; 
  citySubscrition: Subscription;

  station: any = [];
  stationSubscription: Subscription;

  constructor(
    private httpService: HttpService,
    private cityService: CityService,
    private stationService: StationService,
    private http: HttpClient ) {
    this.citySubscrition = this.cityService.onSet().subscribe(city => {
      this.city = city;
      this.getScooters();
    })

    this.stationSubscription = this.stationService.onSet().subscribe(station => {
      this.station = station;
      console.log("Station i konst för scooters", this.station)
      this.getStationScooters();
    })
    this.getScooters();
  }


  getScooters() {
    if(this.city.length != 0) {
      console.log("HÄMTAR", this.city[0].name)

      this.httpService.getScooters(this.city[0].id).subscribe(
        (data:any) => {
          this.subject.next(data)
        }
      )
    }
    return this.subject.asObservable();
  }

  getStationScooters() {
    if(this.city.length != 0) {
      console.log("HÄMTAR", this.station)

      this.httpService.getStationScooters(this.station.id).subscribe(
        (data:any) => {
          this.stationScooters.next(data)
        }
      )
    }
    return this.stationScooters.asObservable();
  }



  // getScooters() {
  //   if (this.city.length != 0) {
  //     console.log("HÄMTAR", this.city[0].name)
  //     return this.httpService.getScooters(this.city[0].id);
  //   } else {
  //     console.log("Hämtar alla scooters")
  //     return this.httpService.getAllScooters();
  //   }
  // }

  
  // getScooters(): Observable<any> {
  //   if (this.city.length != 0) {
  //     console.log("HÄMTAR")
  //     this.httpService.getScooters(this.city[0].id)
  //       .subscribe((data:any) => {
  //       this.scooters.next(data);
  //     });
  //   } else {
  //     this.httpService.getAllScooters()
  //       .subscribe((data:any) => {
  //         this.scooters.next(data);
  //     });
  //   }
  //   return this.scooters.asObservable();

  // }
}
