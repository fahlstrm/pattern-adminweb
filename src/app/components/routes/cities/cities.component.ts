import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  // //Ändra till City-obs? 
  cities: any;

  constructor(
    public cityService: CityService
  ) {}

  ngOnInit(): void {
  }

}
