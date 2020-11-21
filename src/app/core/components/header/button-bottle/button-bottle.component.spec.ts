import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBottleComponent } from './button-bottle.component';

describe('ButtonBottleComponent', () => {
  let component: ButtonBottleComponent;
  let fixture: ComponentFixture<ButtonBottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBottleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
