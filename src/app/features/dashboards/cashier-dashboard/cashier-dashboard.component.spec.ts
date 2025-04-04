import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierDashboardComponent } from './cashier-dashboard.component';

describe('CashierDashboardComponent', () => {
  let component: CashierDashboardComponent;
  let fixture: ComponentFixture<CashierDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashierDashboardComponent]
    });
    fixture = TestBed.createComponent(CashierDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
