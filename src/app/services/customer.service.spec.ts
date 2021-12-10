import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { CustomerService } from './customer.service';
import { HttpService } from './http.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpStub: any;
  let httpTestingController: HttpTestingController;
  let fakeUser: any;

  beforeEach(() => {
    httpStub = {
      getUsers: () => of([{"id":1,"username":"jannikarlsson","token":null,"funds":"200.00","payment_terms":"prepaid"},{"id":2,"username":"fahlstrm","token":null,"funds":"1000.00","payment_terms":"invoice"}]),
      getUser: () => of({"id":1,"username":"jannikarlsson","token":null,"funds":"200.00","payment_terms":"prepaid"}),
      setUser: () => of(),
      getUserLog: () => of({"id":1,"username":"jannikarlsson","token":null,"funds":"200.00","payment_terms":"prepaid"})
    }
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: HttpService, useValue: httpStub}]
    });
    service = TestBed.inject(CustomerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });

  it('should set user', () => {
    let spy = spyOn(service, 'setUser');
    service.setUser(1);
    expect(spy).toHaveBeenCalled(); 
  });

  it('should get user', fakeAsync(() => {
    let spy = spyOn(service, 'getCustomer');
    service.getCustomer();
    tick(1000);
    expect(spy).toHaveBeenCalled(); 
  }));
});