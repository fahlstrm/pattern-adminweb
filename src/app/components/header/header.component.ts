import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @HostBinding('class') classes = 'grid grid-wrap';

  title = 'Sctr';
  subtitle = 'Admin';
  constructor() {}

  ngOnInit(): void {
  }

}
