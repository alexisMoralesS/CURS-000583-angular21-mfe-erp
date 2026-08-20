import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTableComponent } from './product-list-table.component';

describe('ProductListTableComponent', () => {
  let component: ProductListTableComponent;
  let fixture: ComponentFixture<ProductListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
