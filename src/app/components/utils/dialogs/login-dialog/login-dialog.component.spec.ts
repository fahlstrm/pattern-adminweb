import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogComponent } from './login-dialog.component';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of('test')
    };
  }
};

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;
  let dialog: MatDialogMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDialogComponent ],
      imports: [
        MatDialogModule
      ],
      providers: [{ provide: MatDialogRef, useValue: {} }, {
        provide: MatDialog, useClass: MatDialogMock
      }]
    })
    .compileComponents();
  });
  dialog = TestBed.get(MatDialog);

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
