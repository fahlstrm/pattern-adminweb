import { Component, OnInit, HostBinding } from '@angular/core';
import { CityService } from 'src/app/services/city.service'; 
import { Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap';

  city: any = [];
  cityName: any = ``;
  citySubscription: Subscription;

  constructor(
    public cityService: CityService,
    public router: ActivatedRoute
  ) { 

    this.citySubscription = this.cityService.onSet().subscribe(
      (city :any ) => {
        this.city = city 
      }
    );
  }

  ngOnInit(): void {
    //Check city by active route 
    this.router.params.subscribe((params: any) => {
      this.cityName = params.name;
      this.cityService.setCity(this.cityName);
    })
  }
}

 
