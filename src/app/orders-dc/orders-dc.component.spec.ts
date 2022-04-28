import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDCComponent } from './orders-dc.component';

describe('OrdersDCComponent', () => {
  let component: OrdersDCComponent;
  let fixture: ComponentFixture<OrdersDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
