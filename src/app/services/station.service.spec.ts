import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CityService } from './city.service';
import { HttpService } from './http.service';
import { StationService } from './station.service';

describe('StationService', () => {
  let service: StationService;
  let stationStub: any;
  let cityStub: any;

  beforeEach(() => {
    stationStub = {
      getStations: () => of([
        { id: 1, location: "Centralstationen" },
        { id: 2, location: "Elins esplanad" }
      ]),
      setStation: () => of()
    };
    cityStub = {
      onSet: () => of([{"id":1, "name": "Uppsala", "lat_center":"58.399560","lon_center":"13.723922"}]),
      setCity: () => of(),
      loadCities: () => of([{"id":1, "name": "Uppsala", "lat_center":"58.399560","lon_center":"13.723922"}]),
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: HttpService, useValue: stationStub}, {provide: CityService, useValue: cityStub}]
    });
    service = TestBed.inject(StationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set station', () => {
    spyOn(window.console, 'log');
    service.setStation(1); 
    expect(window.console.log).toHaveBeenCalled();
  });
});
