import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, of, Subscription} from "rxjs";
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { CityService } from './city.service';
import { Scooter } from '../Scooter';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {

  private _scooters: any = [];

  private subject = new Subject<any>();
  city: any = []; 
  citySubscrition: Subscription;

  constructor(
    private httpService: HttpService,
    private cityService: CityService,
    private http: HttpClient ) {
    this.citySubscrition = this.cityService.onSet().subscribe(city => {
      this.city = city;
      this.getScooters();
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
