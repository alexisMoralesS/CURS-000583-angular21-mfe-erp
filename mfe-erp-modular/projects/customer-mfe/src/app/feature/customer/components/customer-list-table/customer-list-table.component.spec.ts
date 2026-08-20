import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListTableComponent } from './customer-list-table.component';

describe('CustomerListTableComponent', () => {
  let component: CustomerListTableComponent;
  let fixture: ComponentFixture<CustomerListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerListTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
