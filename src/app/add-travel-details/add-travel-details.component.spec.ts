import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravelDetailsComponent } from './add-travel-details.component';

describe('AddTravelDetailsComponent', () => {
  let component: AddTravelDetailsComponent;
  let fixture: ComponentFixture<AddTravelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTravelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
