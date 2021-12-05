import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap align-items';

  constructor() { }

  ngOnInit(): void {
  }

}
