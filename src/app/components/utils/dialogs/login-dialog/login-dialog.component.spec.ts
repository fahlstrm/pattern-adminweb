import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogComponent } from './login-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;
  let authStub: any;

  beforeEach(async () => {
    let authStub = {
      setAdminId: () => of(true),
      onSetLoggedIn: () => of(true),
      onSetLoginEvent: () => of(true),
      loginAdmin: () => of(true),
      checkClick: () => of({"user_type": "admin"})
    }
    await TestBed.configureTestingModule({
      declarations: [ LoginDialogComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }, {provide: AuthService, useValue: authStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.loginClick).toHaveBeenCalled();
    });
  }) 

});
