import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let expectedScooters: Array<any>;
  let expectedScooter: any;

  beforeEach(() => {
    expectedScooters = [
      { id: 1, battery_level: 50, city_id: 1 },
      { id: 2, battery_level: 40, city_id: 1 }
    ]
    expectedScooter = { id: 1, battery_level: 50, city_id: 1 }
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected scooters', () => {
    const id = 1;
    service.getScooters(id).subscribe(
      scooters => expect(scooters).toEqual(expectedScooters, 'should return expected scooters')
    );

    const req = httpTestingController.expectOne(service.baseUrl + `/cities/${id}/scooters`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedScooters);
  });

  it('should return all scooters', () => {
    service.getAllScooters().subscribe(
      scooters => expect(scooters).toEqual(expectedScooters, 'should return all scooters')
    );

    const req = httpTestingController.expectOne(service.baseUrl + `/scooters`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedScooters);
  });

  // it('should return one scooter', () => {
  //   service.getOneScooter(1).subscribe(
  //     scooters => expect(scooters).toEqual(expectedScooter, 'should return one scooter')
  //   );

  //   const req = httpTestingController.expectOne(service.baseUrl + "/scooters/1");

  //   expect(req.request.method).toEqual('GET');

  //   req.flush(expectedScooter);
  // });
});
