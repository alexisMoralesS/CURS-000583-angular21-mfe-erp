import { ProductCategoryModel } from './../../../../shared/models/product-category.model';
import { FormControlError } from 'lib-erp-modular';
import { Component, inject, input, output } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductCreateModel } from '../../models/product-create.model';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProductBrandModel } from '../../../../shared/models/product-brand.model';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-product-form-create',
  imports: [ReactiveFormsModule, SelectModule, ButtonModule, InputTextModule, FormControlError],
  templateUrl: './product-form-create.component.html',
  styleUrl: './product-form-create.component.css',
})
export class ProductFormCreateComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected saved = output<ProductCreateModel>();
  protected cancel = output<void>();

  public productBrands = input<ProductBrandModel[]>([]);
  public productCategories = input<ProductCategoryModel[]>([]);

  form = this.formBuilder.group({
    code: [null, []],
    name: [null, Validators.required],
    categoryId: [null, Validators.required],
    brandId: [null, [Validators.required]],
    price: [null, Validators.required],
    minStock: [null, Validators.required],
  });

  protected get codeCtrl(): FormControl {
    return this.form.get('code') as FormControl;
  }

  protected get nameCtrl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  protected get categoryIdCtrl(): FormControl {
    return this.form.get('categoryId') as FormControl;
  }

  protected get brandIdCtrl(): FormControl {
    return this.form.get('brandId') as FormControl;
  }

  protected get priceCtrl(): FormControl {
    return this.form.get('price') as FormControl;
  }

  protected get minStockCtrl(): FormControl {
    return this.form.get('minStock') as FormControl;
  }

  protected onCancel() {
    this.cancel.emit();
    this.form.reset();
  }
  onSubmit(): void {
    this.saved.emit(this.form.value as any);
    this.form.reset();
  }
}
