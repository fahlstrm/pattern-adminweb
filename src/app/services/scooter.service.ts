import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable, interval} from "rxjs";
import { startWith, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { CityService } from './city.service';
import { StationService } from './station.service';


/**
 * OM POLLING ÄR BORTKOMMENTERAT KOMMER LINTER KLAGA PÅ ATT interval
 * startWith och switchMap är överflödiga - TA EJ BORT DESSA 
 */
@Injectable({
  providedIn: 'root'
})
export class ScooterService {
  private subject = new Subject<any>();
  private stationScooters = new Subject<any>();
  private allScooters = new Subject<any>();
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
  pollingScooters: Subscription;
  pollingStationScooters: Subscription;

  constructor(
    private httpService: HttpService,
    private cityService: CityService,
    private stationService: StationService,
    private http: HttpClient ) {


    this.pollingScooters = interval(5000)
    .pipe(
      startWith(0),
      switchMap(() => this.getScooters())
      ).subscribe(
        scooters => {
          console.log("Hämtar scootrar:", scooters.length)
        }
      )   

    this.pollingStationScooters = interval(5000)
    .pipe(
      startWith(0),
      switchMap(() => this.getStationScooters())
      ).subscribe(
        scooters => {
          console.log("Hämtar för station:", scooters)
        }
    ) 
 
    this.citySubscrition = this.cityService.onSet().subscribe(city => {
      this.city = city;
      this.getScooters();
    })

    this.stationSubscription = this.stationService.onSet().subscribe(station => {
      this.station = station;
      this.getStationScooters();
    })
    // this.getScooters();
  }

  getAllScooters(): Observable<any> {

    this.httpService.getAllScooters().subscribe(
      (data:any) => {
        this.allScooters.next(data)
      }
    )
    return this.allScooters.asObservable();
  }

  getScooters(): Observable<any> {
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

  getStationScooters(): Observable<any> {
    if(this.city.length != 0) {
      this.httpService.getStationScooters(this.station.id).subscribe(
        (data:any) => {
          this.stationScooters.next(data)
        }
      )
    }
    return this.stationScooters.asObservable();
  }

  // Ändra status till/från active/inactive
  changeScooterStatus(scooter: any): void {
    this.httpService.changeScooterStatus(scooter).next();
  }

  removeScooterFromLoading(scooter: any): void {
    this.httpService.removeScooterFromLoading(scooter);
  }

  //Flytta scooter till parkering
  moveScooterToPark(scooter: any): void {
      this.httpService.moveScooterToPark(scooter);
  }
}
