import { Component, OnInit, Input, NgZone } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';
import { MatDialog } from '@angular/material/dialog';
import { ScooterDialogComponent } from '../../utils/dialogs/scooter-dialog/scooter-dialog.component';
import { ScooterService } from 'src/app/services/scooter.service'; 
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/services/city.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  layers!: Array<any>
  // cityCenter: any = ``;

  cityCenter = latLng([58.396830, 13.853019]);
  citySubscrition: Subscription;
  scooterSubscription: Subscription;
  city: any = [];
  scooters: any = [];

  constructor(
      private zone: NgZone,
      public scooterService: ScooterService, 
      public cityService: CityService, 
      public dialog: MatDialog
    ) {
      this.citySubscrition = this.cityService.onSet().subscribe(city => {
        this.city = city;
      })
      this.scooterSubscription = this.scooterService.getScooters().subscribe(resources => {
        console.log("i konstruktion", resources.length)
        this.scooters = resources;
        this.addMapContent();
      })
    }

  // Base layers
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  icon = icon({
    iconSize: [ 40, 40 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: '../../../assets/img/icon/scooter.png',
    // shadowUrl: 'leaflet/marker-shadow.png'
  })

  parkingIcon = icon({
    iconSize: [ 35, 35 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: '../../../assets/img/icon/parking.png',
    // shadowUrl: 'leaflet/marker-shadow.png'
  })

  chargeIcon = icon({
    iconSize: [ 40, 40 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: '../../../assets/img/icon/charge.png',
    // shadowUrl: 'leaflet/marker-shadow.png'
  })

    
  options = {
    zoom: 10,
    center: this.cityCenter
  };


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.addMapContent();
  }

  addMapContent() {
    this.cityCenter = latLng([this.city[0].lat_center, this.city[0].lon_center]);
    
    // Add marker to base layer
    this.layers = [
      this.streetMaps,
      this.wMaps
    ];
    this.addScooters();
  }

  addScooters() {
    this.scooters.forEach((scooter:any) => {
      this.layers.push(marker([ scooter.lat_pos, scooter.lon_pos], {
          icon: this.icon
        }).addEventListener("click", () => {
          this.zone.run(() => this.openDialog(scooter));
      }));
    })
  }
  
  openDialog(scooter: any) {
    this.dialog.open(ScooterDialogComponent, {
      data: scooter,
      height: '300px',
      width: '600px',
    });
  }
}

