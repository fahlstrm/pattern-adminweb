import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ScooterTableComponent } from './scooter-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ScooterService } from 'src/app/services/scooter.service';
import { of } from 'rxjs';

describe('ScooterTableComponent', () => {
  let component: ScooterTableComponent;
  let fixture: ComponentFixture<ScooterTableComponent>;
  let scootersStub: any;

  beforeEach(waitForAsync(() => {
    scootersStub = {
      getScooters: () => of([{"id":1,"customer_id":null,"city_id":1,"station_id":9,"lat_pos":"58.399560","lon_pos":"13.723922","speed_kph":0,"battery_level":68,"status":"active"}])
    }
    TestBed.configureTestingModule({
      declarations: [ ScooterTableComponent ],
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
    fixture = TestBed.createComponent(ScooterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
