import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap';

  constructor() { }

  ngOnInit(): void {
  }

//   logout():void 
//   {
//    console.log("logga ut")
//  }

}
