import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 
import { ScooterService } from 'src/app/services/scooter.service'; 
import { Subject, Subscription } from 'rxjs';

import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';

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

  scooters: any = [];

  constructor(
    public cityService: CityService,
    public scooterService: ScooterService
  ) { }

  ngOnInit(): void {
    this.scooters = this.scooterService.getScooters();
  }

}
