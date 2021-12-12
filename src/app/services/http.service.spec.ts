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
  let expectedUser: any;
  let expectedLogs: any;

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
    expectedLogs = [{"id":5,"username":"datalowe","funds":"300.00","payment_terms":"prepaid","customer_id":3,"scooter_id":982,"start_time":"2021-11-30 18:02:32","end_time":"2021-11-30 18:08:32","start_lat":"59.874629","start_lon":"17.626082","end_lat":"58.393154","end_lon":"13.838048","start_cost":"20.00","travel_cost":"15.00","parking_cost":"40.00","total_cost":"75.00"}];
    expectedUser = { id: 1, name: "Frida" };
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

  it('should return one user', () => {
    service.getCustomer(1).subscribe(
      user => expect(user).toEqual(expectedUser, 'should return one user')
    );

    const req = httpTestingController.expectOne(service.baseUrl + "/users/1");

    expect(req.request.method).toEqual('GET');

    req.flush(expectedUser);
  });

  it('should return one log', () => {
    service.getCustomerLog(3).subscribe(
      user => expect(user).toEqual(expectedLogs, 'should return one user log')
    );

    const req = httpTestingController.expectOne(service.baseUrl + "/users/3/logs");

    expect(req.request.method).toEqual('GET');

    req.flush(expectedLogs);
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
    service.getCustomers().subscribe(
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

  it('should remove scooter from charging', () => {
    service.removeScooterFromLoading(expectedScooter);
    const req = httpTestingController.expectOne(service.baseUrl + "/scooters/1");
    expect(req.request.method).toEqual('PUT');
  });

  // it('should redirect to github', () => {
  //   service.githubRedirect();
  //   const req = httpTestingController.expectOne(service.baseUrl + "/auth/github/redirect/admin");
  //   expect(req.request.method).toEqual('GET');
  // });
});
