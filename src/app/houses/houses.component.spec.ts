import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesComponent } from './houses.component';

describe('HausesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousesComponent]
    });
    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
