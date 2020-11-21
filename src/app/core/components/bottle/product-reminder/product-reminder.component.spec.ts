import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReminderComponent } from './product-reminder.component';

describe('ProductReminderComponent', () => {
  let component: ProductReminderComponent;
  let fixture: ComponentFixture<ProductReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
