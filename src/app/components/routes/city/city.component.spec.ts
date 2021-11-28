import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CityComponent } from './city.component';
import { ActivatedRoute } from '@angular/router';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityComponent ],
      imports: [ HttpClientTestingModule],
      providers: [ActivatedRoute]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
