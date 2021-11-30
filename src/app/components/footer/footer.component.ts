import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // host: {
  //   class: `grid grid-wrap`
  // }, //Added to set grid for the router-outlet components
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap';


  constructor() {}

  ngOnInit(): void {
  }

}
