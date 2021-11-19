import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooterDialogComponent } from './scooter-dialog.component';

describe('ScooterDialogComponent', () => {
  let component: ScooterDialogComponent;
  let fixture: ComponentFixture<ScooterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScooterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScooterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
