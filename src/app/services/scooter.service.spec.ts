import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ScooterService } from './scooter.service';

describe('ScooterService', () => {
  let service: ScooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ScooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
