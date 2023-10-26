import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerEditComponent } from './producer-edit.component';

describe('ProducerEditComponent', () => {
  let component: ProducerEditComponent;
  let fixture: ComponentFixture<ProducerEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducerEditComponent]
    });
    fixture = TestBed.createComponent(ProducerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
