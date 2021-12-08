import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

import { CustomerDialogComponent } from './customer-dialog.component';

describe('CustomerDialogComponent', () => {
  let component: CustomerDialogComponent;
  let fixture: ComponentFixture<CustomerDialogComponent>;
  let customerStub: any;

  beforeEach(async () => {
    customerStub = {
      getCustomer: () => of([{"id":1,"username":"jannikarlsson","token":null,"funds":"200.00","payment_terms":"prepaid"}])
    }
    await TestBed.configureTestingModule({
      declarations: [ CustomerDialogComponent ],
      providers: [{ provide: MatDialogRef, useValue: {} }, {provide: CustomerService, useValue: customerStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
