import { Injectable } from '@angular/core';
import { Subject, Subscription, interval} from "rxjs";
import { startWith, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { CityService } from './city.service';
import { StationService } from './station.service';

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

  /**
   * Ta bort bortkommentering av polling-var nedan 
   * inkl pollingSchooter och pollingStationScooters i konstruktorn
   * för att aktivera polling
   * Intervallet anger hur lång tid mellan hämtningar
   */
  // pollingScooters: Subscription;
  // pollingStationScooters: Subscription;

  constructor(
    private httpService: HttpService,
    private cityService: CityService,
    private stationService: StationService,
    private http: HttpClient ) {


  // this.pollingScooters = interval(10000)
  // .pipe(
  //   startWith(0),
  //   switchMap(() => this.getScooters())
  //   ).subscribe(
  //     scooters => {
  //       console.log("Hämtar scootrar:", scooters.length)
  //     }
  //   )   

  //   this.pollingStationScooters = interval(10000)
  //   .pipe(
  //     startWith(0),
  //     switchMap(() => this.getScooters())
  //     ).subscribe(
  //       scooters => {
  //         console.log("Hämtar scootrar:", scooters.length)
  //       }
  //   ) 
 
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

  changeScooterStatus(scooter: any) {
    console.log("scooter att ändra", scooter)


    this.httpService.putScooter(scooter);
  }
}
