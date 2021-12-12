import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AuthService } from './auth.service';
import { HttpService } from './http.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpStub: any;

  beforeEach(() => {
    httpStub = {
      githubRedirect: () => of({"login_url":"test.url"}),
      checkAdminAuth: () => of({"user_type":"admin","id":"1"}),
    }
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [{provide: HttpService, useValue: httpStub}]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login', () => {
    let spy = spyOn(service, 'setLoggedin')
    service.loginAdmin();
    expect(spy).toHaveBeenCalled();
  });

  it('should check user access', () => {
    let spy = spyOn(service, 'setAdminId')
    service.checkClick();
    expect(spy).toHaveBeenCalled();
  });

  it('should set admin id', () => {
    let spy = spyOn(service, 'setAdminId')
    service.setAdminId(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
});
