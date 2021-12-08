import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { CustomerDialogComponent } from './customer-dialog.component';

describe('CustomerDialogComponent', () => {
  let component: CustomerDialogComponent;
  let fixture: ComponentFixture<CustomerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDialogComponent ],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
