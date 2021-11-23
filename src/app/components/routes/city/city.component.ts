import { Component, OnInit, HostBinding } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 
import { ScooterService } from 'src/app/services/scooter.service'; 
import { Subject, Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Scooter } from '../../../Scooter';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap';

  city: any = [];
  cities: any = [];
  cityName: any = ``;
  scooters: Scooter[] = [];
  // scooterSubscription: Subscription;
  citySubscription: Subscription;

  constructor(
    public cityService: CityService,
    public scooterService: ScooterService,
    public router: ActivatedRoute
  ) { 

    this.citySubscription = this.cityService.onSet().subscribe(
      (city :any ) => {
        this.city = city 
      }
    );
  }

  ngOnInit(): void {
    //Check city by active route 
    this.router.params.subscribe((params: any) => {
      this.cityName = params.name;
      this.cityService.setCity(this.cityName);
    })
  }

  // ngDoCheck() {
  //   this.ngOnInit();
  // }


    // this.router.params.subscribe((params: any) => {
    //   this.city_name = params.name;
    //   this.curr_city = this.cityService._cities.filter((city:any) => city.name == params.name);
    // })
  
    // this.scooters = this.scooterService._scooters.filter((scooter: any) => scooter.city_id == this.curr_city[0].id);
    // this.scooterService.startScooterSubscription().subscribe((scooter: any) => {
    //   this.scooters = scooter;
    // });

}

 
