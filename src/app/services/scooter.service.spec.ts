import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpService } from './http.service';

import { ScooterService } from './scooter.service';
import { StationService } from './station.service';


describe('ScooterService', () => {
  let service: ScooterService;
  let scooterStub: any;
  let stationStub: any;

  beforeEach(() => {
    stationStub = {
      onSet: () => of({"id":2,"city_id":1,"location":"Sjukhuset","lat_center":"58.407255","lon_center":"13.824840","radius":"0.002","type":"charge"})
    }
    scooterStub = {
      getStationScooters: () => of([{"id":2,"city_id":1,"location":"Sjukhuset","lat_center":"58.407255","lon_center":"13.824840","radius":"0.002","type":"charge"}]),
      getCities: () => of(),
      changeScooterStatus: () => of()
    }
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [{provide: HttpService, useValue: scooterStub}, {provide: StationService, useValue: stationStub}]
    });
    service = TestBed.inject(ScooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load scooters', () => {
    service.city = [1];
    service.station = {"id": 1};
    let spy = spyOn(service, 'getStationScooters');
    service.getStationScooters();
    expect(spy).toHaveBeenCalled();

  });

  it('should remove scooter from loading', () => {
    let scooter = {"id":2,"city_id":1,"location":"Sjukhuset","lat_center":"58.407255","lon_center":"13.824840","radius":"0.002","type":"charge"};
    let spy = spyOn(service, 'changeScooterStatus');
    service.changeScooterStatus(scooter);
    expect(spy).toHaveBeenCalled();

  });

  // it('should change scooter status', () => {
  //   let spy = spyOn(service, 'changeScooterStatus');
  //   service.changeScooterStatus(1);
  //   expect(spy).toHaveBeenCalled();
  // });
});
