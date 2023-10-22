import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsGroupTemperatureComponent } from './results-group-temperature.component';

describe('ResultsGroupTemperatureComponent', () => {
  let component: ResultsGroupTemperatureComponent;
  let fixture: ComponentFixture<ResultsGroupTemperatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsGroupTemperatureComponent]
    });
    fixture = TestBed.createComponent(ResultsGroupTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
