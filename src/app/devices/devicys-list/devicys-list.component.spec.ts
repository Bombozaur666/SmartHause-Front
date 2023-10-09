import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicysListComponent } from './devicys-list.component';

describe('DevicysListComponent', () => {
  let component: DevicysListComponent;
  let fixture: ComponentFixture<DevicysListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevicysListComponent]
    });
    fixture = TestBed.createComponent(DevicysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
