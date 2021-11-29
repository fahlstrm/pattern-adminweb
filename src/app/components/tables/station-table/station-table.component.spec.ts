import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { StationTableComponent } from './station-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { StationService } from 'src/app/services/station.service';
import { of } from 'rxjs';

describe('StationTableComponent', () => {
  let component: StationTableComponent;
  let fixture: ComponentFixture<StationTableComponent>;
  let stationsStub: any;

  beforeEach(waitForAsync(() => {
    stationsStub = {
      getStations: () => of([{"id":2,"city_id":1,"location":"Sjukhuset","lat_center":"58.407255","lon_center":"13.824840","radius":"0.002","type":"charge"},{"id":3,"city_id":1,"location":"Circle K","lat_center":"58.390452","lon_center":"13.834545","radius":"0.002","type":"charge"}]),
      onSet: () => of()
    } 
    TestBed.configureTestingModule({
      declarations: [ StationTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [{provide: StationService, useValue: stationsStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close park dialog', () => {
    spyOn(component.dialog, 'open');
    component.openDialog(1);
    expect(component.dialog.open).toHaveBeenCalled();
    }
  );
});
