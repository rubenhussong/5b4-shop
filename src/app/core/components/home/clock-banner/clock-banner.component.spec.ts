import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockBannerComponent } from './clock-banner.component';

describe('ClockBannerComponent', () => {
  let component: ClockBannerComponent;
  let fixture: ComponentFixture<ClockBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
