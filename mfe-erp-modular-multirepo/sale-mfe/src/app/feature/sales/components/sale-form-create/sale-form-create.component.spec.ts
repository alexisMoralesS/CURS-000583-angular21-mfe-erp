import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleFormCreateComponent } from './sale-form-create.component';

describe('SaleFormCreateComponent', () => {
  let component: SaleFormCreateComponent;
  let fixture: ComponentFixture<SaleFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleFormCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleFormCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
