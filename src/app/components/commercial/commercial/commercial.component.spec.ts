import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialComponent } from './commercial.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('CommercialComponent', () => {
  let component: CommercialComponent;
  let fixture: ComponentFixture<CommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialComponent ],
      imports: [
        MatDialogModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
