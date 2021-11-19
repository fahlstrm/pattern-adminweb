import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 
import { ScooterService } from 'src/app/services/scooter.service'; 
import { Subject, Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Scooter } from '../../../Scooter';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: any = [];
  cities: any = [];
  scooters: Scooter[] = [];
  scooterSubscription: Subscription;
  // citySubscription: Subscription;

  constructor(
    public cityService: CityService,
    public scooterService: ScooterService,
    public router: ActivatedRoute
  ) { 

    
    cityService.cities.subscribe((city: any) => {
      this.city = city.filter((city:any) => {
        city.name == this.cities.name;
      });
    });

    this.scooterSubscription = this.scooterService.getScooters().subscribe(
      (scooter :any ) => {
        this.scooters = scooter }
      );
  }

  ngOnInit(): void {
    //Check city by active route 
    this.router.params.subscribe((params: any) => {
      this.cities = params;
    })
  }
    // this.router.params.subscribe((params: any) => {
    //   this.city_name = params.name;
    //   this.curr_city = this.cityService._cities.filter((city:any) => city.name == params.name);
    // })
  
    // this.scooters = this.scooterService._scooters.filter((scooter: any) => scooter.city_id == this.curr_city[0].id);
    // this.scooterService.startScooterSubscription().subscribe((scooter: any) => {
    //   this.scooters = scooter;
    // });

}

 
