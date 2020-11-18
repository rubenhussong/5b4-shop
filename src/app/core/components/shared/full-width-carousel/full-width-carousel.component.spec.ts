import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthCarouselComponent } from './full-width-carousel.component';

describe('FullWidthCarouselComponent', () => {
  let component: FullWidthCarouselComponent;
  let fixture: ComponentFixture<FullWidthCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullWidthCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
