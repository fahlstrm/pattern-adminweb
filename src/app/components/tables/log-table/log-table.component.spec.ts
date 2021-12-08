import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { LogTableComponent } from './log-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { of } from 'rxjs';

describe('LogTableComponent', () => {
  let component: LogTableComponent;
  let fixture: ComponentFixture<LogTableComponent>;
  let customerStub: any;

  beforeEach(waitForAsync(() => {
    customerStub = {
      getLog: () => of([{"id":1,"customer_id":2,"scooter_id":230,"start_time":"2021-11-30 18:00:05","end_time":"2021-11-30 18:05:05","start_lat":"58.386184","start_lon":"13.837870","end_lat":"58.394266","end_lon":"13.857240","start_cost":"20.00","travel_cost":"12.50","parking_cost":"20.00","total_cost":"52.50"}]),
      setUser: () => of()
    }
    TestBed.configureTestingModule({
      declarations: [ LogTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        {provide: CustomerService, useValue: customerStub}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
