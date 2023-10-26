import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerDevicesComponent } from './producer-devices.component';

describe('ProducerDevicesComponent', () => {
  let component: ProducerDevicesComponent;
  let fixture: ComponentFixture<ProducerDevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducerDevicesComponent]
    });
    fixture = TestBed.createComponent(ProducerDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
