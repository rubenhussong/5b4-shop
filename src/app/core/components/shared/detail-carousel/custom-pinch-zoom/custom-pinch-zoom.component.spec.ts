import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPinchZoomComponent } from './custom-pinch-zoom.component';

describe('CustomPinchZoomComponent', () => {
  let component: CustomPinchZoomComponent;
  let fixture: ComponentFixture<CustomPinchZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPinchZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPinchZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
