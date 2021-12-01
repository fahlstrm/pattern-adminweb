import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StationScooterTableComponent } from './station-scooter-table.component';
import { ScooterService } from 'src/app/services/scooter.service';
import { MatDialogModule } from '@angular/material/dialog';

import { of } from 'rxjs';

describe('StationScooterTableComponent', () => {
  let component: StationScooterTableComponent;
  let fixture: ComponentFixture<StationScooterTableComponent>;
  let scootersStub: any;

  beforeEach(waitForAsync(() => {
    scootersStub = {
      getStationScooters: () => of([{"id":1,"customer_id":null,"city_id":1,"station_id":9,"lat_pos":"58.399560","lon_pos":"13.723922","speed_kph":0,"battery_level":68,"status":"active"}])
    }
    TestBed.configureTestingModule({
      declarations: [ StationScooterTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [{provide: ScooterService, useValue: scootersStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationScooterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
