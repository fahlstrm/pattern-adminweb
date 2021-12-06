import { Component, OnInit, HostBinding } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap align-items fill-body';

  // //Ändra till City-obs? 
  cities: any;

  constructor(
    public cityService: CityService
  ) {}

  ngOnInit(): void {
  }

}
