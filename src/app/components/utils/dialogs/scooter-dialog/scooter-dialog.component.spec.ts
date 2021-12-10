import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { StationService } from 'src/app/services/station.service';
import { ScooterDialogComponent } from './scooter-dialog.component';
import { ScooterService } from 'src/app/services/scooter.service';

describe('ScooterDialogComponent', () => {
  let component: ScooterDialogComponent;
  let fixture: ComponentFixture<ScooterDialogComponent>;
  let data: any;
  let stationsStub: any;
  let scootersStub: any;

  beforeEach(async () => {
    scootersStub = {
      moveScooterToPark: () => of(),
      changeScooterStatus: () => of(),
      removeScooterFromLoading: () => of()
    }
    stationsStub = {
      getStations: () => of([{"id":2,"city_id":1,"location":"Sjukhuset","lat_center":"58.407255","lon_center":"13.824840","radius":"0.002","type":"charge"},{"id":3,"city_id":1,"location":"Circle K","lat_center":"58.390452","lon_center":"13.834545","radius":"0.002","type":"charge"}]),
      onSet: () => of()
    }
    data = {"id":1,"customer_id":null,"city_id":1,"station_id":9,"lat_pos":"58.399560","lon_pos":"13.723922","speed_kph":0,"battery_level":68,"status":"active"}
    await TestBed.configureTestingModule({
      declarations: [ ScooterDialogComponent ],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: data }, {provide: StationService, useValue: stationsStub}, {provide: ScooterService, useValue: scootersStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooterDialogComponent);
    component = fixture.componentInstance;
    component.checked = true;
    component.scooter = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set checked', () => {
    component.scooter = {"id":1,"customer_id":null,"city_id":1,"station_id":9,"lat_pos":"58.399560","lon_pos":"13.723922","speed_kph":0,"battery_level":68,"status":"active"};
    fixture.detectChanges();
    let spy = spyOn(component, 'setChecked');
    component.setChecked();
    expect(spy).toHaveBeenCalled();
    // expect(component.checked).toBe(true);
  });

  it('should set checked', () => {
    component.scooter = {"id":1,"customer_id":null,"city_id":1,"station_id":9,"lat_pos":"58.399560","lon_pos":"13.723922","speed_kph":0,"battery_level":68,"status":"active"};
    fixture.detectChanges();
    let spy = spyOn(component, 'setChecked');
    component.setChecked();
    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
    // expect(component.checked).toBe(true);
  });

  // let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
    

  it('should be moved to park', () => {
    let spy = spyOn(component, 'moveScooterToStation');
    component.scooter = {"id":1,"customer_id":null,"city_id":1,"station_id":9,"lat_pos":"58.399560","lon_pos":"13.723922","speed_kph":0,"battery_level":68,"status":"active"};
    component.selectedStation = {"id":2,"city_id":1,"location":"Sjukhuset","lat_center":"58.407255","lon_center":"13.824840","radius":"0.002","type":"charge"};
    component.scooterOnCharge = false;
    fixture.detectChanges();
    component.moveScooterToStation();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    // expect(component.scooter).toEqual({"id":1,"customer_id":null,"city_id":1,"station_id":2,"lat_pos":"58.399560","lon_pos":"13.723922","speed_kph":0,"battery_level":68,"status":"active"});
    expect(component.scooter).toBeTruthy();
  });

});
