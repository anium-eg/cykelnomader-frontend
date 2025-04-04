import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderStep3Component } from './new-order-step-3.component';

describe('NewOrderStep3Component', () => {
  let component: NewOrderStep3Component;
  let fixture: ComponentFixture<NewOrderStep3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewOrderStep3Component]
    });
    fixture = TestBed.createComponent(NewOrderStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
