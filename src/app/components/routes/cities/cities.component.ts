import { Component, OnInit, HostBinding } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap';

  // //Ändra till City-obs? 
  cities: any;

  constructor(
    public cityService: CityService
  ) {}

  ngOnInit(): void {
  }

}
