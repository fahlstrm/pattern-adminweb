import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CityComponent } from './city.component';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { of } from 'rxjs';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let cityStub: any;
  let mockRoute: any;

  beforeEach(async () => {
    mockRoute = {
      "skovde": "/skovde",
      "lund": "/lund",
      "uppsala": "/uppsala"
    }
    cityStub = {
      onSet: () => of([{"id":1, "name": "Uppsala", "lat_center":"58.399560","lon_center":"13.723922"}]),
      setCity: () => of(),
      loadCities: () => of([{"id":1, "name": "Uppsala", "lat_center":"58.399560","lon_center":"13.723922"}]),

    }
    await TestBed.configureTestingModule({
      declarations: [ CityComponent ],
      imports: [ HttpClientTestingModule],
      providers: [{provide: ActivatedRoute,
        useValue: {
          params: of({
            bookId: "lund",
          }),
        },}, {provide: CityService, useValue: cityStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get cities on init', () => {
  //   expect(component.city).toContain({"id":1, "name": "Uppsala", "lat_center":"58.399560","lon_center":"13.723922"})
  // });
});
