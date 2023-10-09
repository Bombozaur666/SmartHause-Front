import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HausesComponent } from './hauses.component';

describe('HausesComponent', () => {
  let component: HausesComponent;
  let fixture: ComponentFixture<HausesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HausesComponent]
    });
    fixture = TestBed.createComponent(HausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
