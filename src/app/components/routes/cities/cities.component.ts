import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: any = [
    {
      name: "Skövde", 
    },
    {
      name: "Lund", 
    },
    {
      name: "Uppsala", 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
