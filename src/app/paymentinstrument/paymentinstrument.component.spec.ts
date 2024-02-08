import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentinstrumentComponent } from './paymentinstrument.component';

describe('PaymentinstrumentComponent', () => {
  let component: PaymentinstrumentComponent;
  let fixture: ComponentFixture<PaymentinstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentinstrumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentinstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
