import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 
import { ScooterService } from 'src/app/services/scooter.service'; 
import { Subject, Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  curr_city: any = [];
  city_name: string = ``;
  scooters: any = [];

  constructor(
    public cityService: CityService,
    public scooterService: ScooterService,
    public router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Check city by active route 
    this.router.params.subscribe((params: any) => {
      this.city_name = params.name;
      this.curr_city = this.cityService._cities.filter((city:any) => city.name == params.name);
      console.log(this.curr_city);  
    })
    
    this.scooters = this.scooterService.getScooters();
  }

}
