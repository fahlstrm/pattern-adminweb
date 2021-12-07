import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CustomerTableComponent } from './customer-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerService } from 'src/app/services/customer.service';
import { of } from 'rxjs';

describe('CustomerTableComponent', () => {
  let component: CustomerTableComponent;
  let fixture: ComponentFixture<CustomerTableComponent>;
  let customerStub: any;

  beforeEach(waitForAsync(() => {
    customerStub = {
      getUsers: () => of([{"id":1,"username":"jannikarlsson","token":null,"funds":"200.00","payment_terms":"prepaid"},{"id":2,"username":"fahlstrm","token":null,"funds":"1000.00","payment_terms":"invoice"}])
    }
    TestBed.configureTestingModule({
      declarations: [ CustomerTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientTestingModule
      ],
      providers: [{provide: CustomerService, useValue: customerStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should log row to console', () => {
    spyOn(window.console, 'log');
    component.openDialog(1); 
    expect(window.console.log).toHaveBeenCalled();
  });
});
