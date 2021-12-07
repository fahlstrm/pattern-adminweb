import { Component, OnInit, HostBinding } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ScooterService } from 'src/app/services/scooter.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap align-items fill-body';
  logSubscription: Subscription;
  scooterSubscription: Subscription;
  log: any = [
    {scooter_id: 0}
  ];
  scooters: any = [];

  constructor(
    public customerService: CustomerService,
    public scooterService: ScooterService

  ) {
    this.logSubscription = this.customerService.getLog().subscribe(
      (resources :any ) => {
        this.log = resources; 
      }
    );
    this.scooterSubscription = this.scooterService.getAllScooters().subscribe(resources => {
      this.scooters = resources; 
    })
  }

  ngOnInit(): void {
  }

}
