import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderStep2Component } from './new-order-step-2.component';

describe('NewOrderStep2Component', () => {
  let component: NewOrderStep2Component;
  let fixture: ComponentFixture<NewOrderStep2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewOrderStep2Component]
    });
    fixture = TestBed.createComponent(NewOrderStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
