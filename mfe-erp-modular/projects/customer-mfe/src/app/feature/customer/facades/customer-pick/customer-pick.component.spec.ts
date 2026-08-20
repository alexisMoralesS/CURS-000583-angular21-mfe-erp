import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPickComponent } from './customer-pick.component';

describe('CustomerPickComponent', () => {
  let component: CustomerPickComponent;
  let fixture: ComponentFixture<CustomerPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPickComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerPickComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
