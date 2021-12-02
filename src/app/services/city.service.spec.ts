import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CityService } from './city.service';
import { HttpService } from './http.service';

describe('CityService', () => {
  let service: CityService;
  let cityStub: any;

  beforeEach(() => {
    cityStub = {
      getCities: () => of([{"id":1,"name":"Sk\u00f6vde","lat_center":"58.394125","lon_center":"13.853491","radius":"5.0"},{"id":2,"name":"Lund","lat_center":"55.710696","lon_center":"13.201312","radius":"2.0"},{"id":3,"name":"Uppsala","lat_center":"59.861534","lon_center":"17.654339","radius":"5.0"}]),
      loadCities: () => of()
    }
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [{provide: HttpService, useValue: cityStub}]
    });
    service = TestBed.inject(CityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
