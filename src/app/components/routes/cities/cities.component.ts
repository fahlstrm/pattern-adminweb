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
      img: "test", 
      alt: "alt text",
      link: "/skovde",
      city_id: "1"
    },
    {
      name: "Lund", 
      img: "test", 
      alt: "alt text",
      link: "/lund",
      city_id: "2"
    },
    {
      name: "Linköping", 
      img: "test", 
      alt: "alt text",
      link: "/linkoping",
      city_id: "3"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
