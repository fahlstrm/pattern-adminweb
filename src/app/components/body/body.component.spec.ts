import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;
  let authStub = {
    setAdminId: () => of("result"),
    onSetLoginEvent: () => of(true),
    checkAdminAuth: () => of({"user_type": "admin"})
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{provide: AuthService, useValue: authStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should log in', () => {
  //   component.loggedIn = false;
  //   fixture.detectChanges();
  //   component.checkClick();
  //   fixture.detectChanges();
  //   expect(component.loggedIn).toBeTrue();
  // });

  it('should change loggedIn', () => {
    component.loggedIn = false;
    fixture.detectChanges();
    component.loginClick();
    fixture.detectChanges();
    expect(component.loggedIn).toBeTrue();
  });
});
