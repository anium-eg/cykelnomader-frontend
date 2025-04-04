import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToggleSliderComponent } from './text-toggle-slider.component';

describe('TextToggleSliderComponent', () => {
  let component: TextToggleSliderComponent;
  let fixture: ComponentFixture<TextToggleSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextToggleSliderComponent]
    });
    fixture = TestBed.createComponent(TextToggleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
