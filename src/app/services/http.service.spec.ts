import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let expectedScooters: Array<any>;
  let expectedScooter: any;
  let expectedStations: any;
  let expectedUsers: any;

  beforeEach(() => {
    expectedScooters = [
      { id: 1, battery_level: 50, city_id: 1 },
      { id: 2, battery_level: 40, city_id: 1 }
    ];
    expectedScooter = { id: 1, station_id: 1, battery_level: 50, city_id: 1, status: "active", lat_pos: 58.0, lon_pos: 13.0 };
    expectedStations = [
      { id: 1, location: "Centralstationen" },
      { id: 2, location: "Elins esplanad" }
    ];
    expectedUsers = [
      { id: 1, name: "Frida" },
      { id: 2, name: "Janni" }
    ];
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

  it('should return one scooter', () => {
    service.getOneScooter({"id": 1}).subscribe(
      scooters => expect(scooters).toEqual(expectedScooter, 'should return one scooter')
    );

    const req = httpTestingController.expectOne(service.baseUrl + "/scooters/1");

    expect(req.request.method).toEqual('GET');

    req.flush(expectedScooter);
  });

  it('should return expected stations', () => {
    service.getStations(1).subscribe(
      stations => expect(stations).toEqual(expectedStations, 'should return expected stations')
    );

    const req = httpTestingController.expectOne(service.baseUrl + "/cities/1/stations");
    expect(req.request.method).toEqual('GET');

    req.flush(expectedStations);
  });

  it('should return scooters at station', () => {
    service.getStationScooters(1).subscribe(
      scooters => expect(scooters).toEqual(expectedScooters, 'should return expected stations')
    );

    const req = httpTestingController.expectOne(service.baseUrl + "/stations/1/scooters");
    expect(req.request.method).toEqual('GET');

    req.flush(expectedScooters);
  });

  it('should return expected users', () => {
    service.getUsers().subscribe(
      users => expect(users).toEqual(expectedUsers, 'should return expected stations')
    );

    const req = httpTestingController.expectOne(service.baseUrl + "/users");
    expect(req.request.method).toEqual('GET');

    req.flush(expectedUsers);
  });

  it('should change scooter status', () => {
    service.changeScooterStatus(expectedScooter);
    const req = httpTestingController.expectOne(service.baseUrl + "/scooters/1");
    expect(req.request.method).toEqual('PUT');
  });

  it('should move scooter to park', () => {
    service.moveScooterToPark(expectedScooter);
    const req = httpTestingController.expectOne(service.baseUrl + "/scooters/1");
    expect(req.request.method).toEqual('PUT');
  });
});
