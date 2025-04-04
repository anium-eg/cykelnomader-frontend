import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryProductCardComponent } from './admin-inventory-product-card.component';

describe('AdminInventoryProductCardComponent', () => {
  let component: AdminInventoryProductCardComponent;
  let fixture: ComponentFixture<AdminInventoryProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInventoryProductCardComponent]
    });
    fixture = TestBed.createComponent(AdminInventoryProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
