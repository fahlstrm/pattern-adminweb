import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpService } from './http.service';

import { ScooterService } from './scooter.service';

describe('ScooterService', () => {
  let service: ScooterService;
  let scooterStub: any;

  beforeEach(() => {
    scooterStub = {
      getStationScooters: () => of()
    }
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ScooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
