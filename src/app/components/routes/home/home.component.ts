import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
  // host: {
  //   class: `grid grid-wrap`
  // }, //Added to set grid for the router-outlet components
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap';

  constructor() { }

  ngOnInit(): void {
  }

}
