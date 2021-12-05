import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CustomerService } from './customer.service';
import { HttpService } from './http.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpStub: any;

  beforeEach(() => {
    httpStub = {
      getUsers: () => of([{"id":1,"username":"jannikarlsson","token":null,"funds":"200.00","payment_terms":"prepaid"},{"id":2,"username":"fahlstrm","token":null,"funds":"1000.00","payment_terms":"invoice"}])
    }
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: HttpService, useValue: httpStub}]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });

  it('should get users', () => {
    let spy = spyOn(service, 'getUsers');
    service.getUsers();
    expect(spy).toHaveBeenCalled(); 
  });
});
