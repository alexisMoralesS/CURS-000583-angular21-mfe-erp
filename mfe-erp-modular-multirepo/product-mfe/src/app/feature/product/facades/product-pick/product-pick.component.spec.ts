import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPickComponent } from './product-pick.component';

describe('ProductPickComponent', () => {
  let component: ProductPickComponent;
  let fixture: ComponentFixture<ProductPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPickComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPickComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
