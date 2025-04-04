import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderStep1Component } from './new-order-step-1.component';

describe('NewOrderStep1Component', () => {
  let component: NewOrderStep1Component;
  let fixture: ComponentFixture<NewOrderStep1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewOrderStep1Component]
    });
    fixture = TestBed.createComponent(NewOrderStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
