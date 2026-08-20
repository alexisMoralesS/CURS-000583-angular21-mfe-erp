import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormCreateComponent } from './customer-form-create.component';

describe('CustomerFormCreateComponent', () => {
  let component: CustomerFormCreateComponent;
  let fixture: ComponentFixture<CustomerFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFormCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerFormCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
