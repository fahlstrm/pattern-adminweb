import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StationDialogComponent } from './station-dialog.component';
import { StationService } from 'src/app/services/station.service';

describe('StationDialogComponent', () => {
  let component: StationDialogComponent;
  let fixture: ComponentFixture<StationDialogComponent>;
  let stationsStub: any;
  let data: any;

  beforeEach(async () => {
    stationsStub = {
      onSet: () => of(),
      setStation: () => of()
    }
    data = {"id":2,"city_id":1,"location":"Sjukhuset","lat_center":"58.407255","lon_center":"13.824840","radius":"0.002","type":"charge"}
    await TestBed.configureTestingModule({
      declarations: [ StationDialogComponent ],
      imports: [HttpClientTestingModule], 
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: data }, {provide: StationService, useValue: stationsStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
