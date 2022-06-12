import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTravelDetailsComponent } from './display-travel-details.component';

describe('DisplayTravelDetailsComponent', () => {
  let component: DisplayTravelDetailsComponent;
  let fixture: ComponentFixture<DisplayTravelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTravelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTravelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
