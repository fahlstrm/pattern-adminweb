import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap';

  constructor() { }

  ngOnInit(): void {
  }

}
