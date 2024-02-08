import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiilsectionComponent } from './biilsection.component';

describe('BiilsectionComponent', () => {
  let component: BiilsectionComponent;
  let fixture: ComponentFixture<BiilsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiilsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiilsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
