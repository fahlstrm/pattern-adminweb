import { Component, OnInit, Input, NgZone } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  layers!: Array<any>
  // cityCenter: any = ``;

  cityCenter = latLng([58.396830, 13.853019]);
  
  @Input() city: any;
  @Input() scooters: any;

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



  constructor(
    private zone: NgZone
    ) { }

  ngOnInit(): void {
    this.cityCenter = latLng([this.city[0].lat_center, this.city[0].lon_center]);
  }

  ngOnChanges() {
    // console.log("i ngDoCheck" , this.scooters)
    this.addMapContent();
  }

    
  addMapContent() {

    // Add base layers
    this.layers = [
      this.streetMaps,
      this.wMaps
    ];
    this.scooters.forEach((scooter:any) => {
      this.layers.push(marker([ scooter.lat_pos, scooter.lon_pos], {
        icon: this.icon}))
      // }).addEventListener("click", () => {
      //   this.zone.run(() => this.activateService.markerClick(scooter.id))
      // }));
      });
    }
  
}

