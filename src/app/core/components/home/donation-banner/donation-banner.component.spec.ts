import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationBannerComponent } from './donation-banner.component';

describe('DonationBannerComponent', () => {
  let component: DonationBannerComponent;
  let fixture: ComponentFixture<DonationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
