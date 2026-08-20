import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormCreateComponent } from './product-form-create.component';

describe('ProductFormCreateComponent', () => {
  let component: ProductFormCreateComponent;
  let fixture: ComponentFixture<ProductFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFormCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
