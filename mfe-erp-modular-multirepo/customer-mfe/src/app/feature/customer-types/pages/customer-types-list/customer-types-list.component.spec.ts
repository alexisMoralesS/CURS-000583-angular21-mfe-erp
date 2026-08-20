import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTypesListComponent } from './customer-types-list.component';

describe('CustomerTypesListComponent', () => {
  let component: CustomerTypesListComponent;
  let fixture: ComponentFixture<CustomerTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTypesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerTypesListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
