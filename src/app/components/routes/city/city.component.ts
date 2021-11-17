import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {


  constructor(
    public cityService: CityService
  ) { }

  ngOnInit(): void {
  }

}
