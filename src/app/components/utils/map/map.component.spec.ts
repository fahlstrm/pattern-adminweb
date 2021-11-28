import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { latLng } from 'leaflet';
import { of } from 'rxjs';
import { CityService } from 'src/app/services/city.service';
import { ScooterService } from 'src/app/services/scooter.service';
import { StationService } from 'src/app/services/station.service';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mockRoute: any;
  let stationsStub: any;
  let scootersStub: any;
  let cityStub: any;

  beforeEach(async () => {
    mockRoute = {
      "skovde": "/skovde",
      "lund": "/lund",
      "uppsala": "/uppsala"
    }
    stationsStub = {
      getStations: () => of([{"id":2,"city_id":1,"location":"Sjukhuset","lat_center":"58.407255","lon_center":"13.824840","radius":"0.002","type":"charge"},{"id":3,"city_id":1,"location":"Circle K","lat_center":"58.390452","lon_center":"13.834545","radius":"0.002","type":"charge"}]),
      onSet: () => of()
    }
    scootersStub = {
      getScooters: () => of([{"id":1,"customer_id":null,"city_id":1,"station_id":9,"lat_pos":"58.399560","lon_pos":"13.723922","speed_kph":0,"battery_level":68,"status":"active"}])
    }
    cityStub = {
      onSet: () => of([{"id":1, "name": "Uppsala", "lat_center":"58.399560","lon_center":"13.723922"}])
    }
    await TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [{provide: ActivatedRoute, useValue: mockRoute}, {provide: StationService, useValue: stationsStub}, {provide: ScooterService, userValue: scootersStub}, {provide: CityService, useValue: cityStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
