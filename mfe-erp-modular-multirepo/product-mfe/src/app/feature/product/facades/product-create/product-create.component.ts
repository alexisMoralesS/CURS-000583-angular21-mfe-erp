import { Dialog } from 'primeng/dialog';
import { Component, inject, model, OnInit, output } from '@angular/core';
import { ProductFormCreateComponent } from '../../components/product-form-create/product-form-create.component';
import { ProductCreateModel } from '../../models/product-create.model';
import { ProductBrandService } from '../../../../shared/services/product-brand.service';
import { ProductCategoryService } from '../../../../shared/services/product-category.service';
import { ProductService } from '../../services/product.service';
import { ProductListModel } from '../../models/product-list.model';

@Component({
  selector: 'app-product-create',
  imports: [Dialog, ProductFormCreateComponent],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent  {
  protected readonly productService = inject(ProductService);
  protected readonly productBrandService = inject(ProductBrandService);
  protected readonly productCategoryService = inject(ProductCategoryService);

  protected readonly productBrands = this.productBrandService.productBrands;
  protected readonly productCategories = this.productCategoryService.productCategories;

  public visible = model<boolean>(false);
  public created = output<ProductListModel>();


  customerSaved(product: ProductCreateModel) {
    this.productService.save(product).subscribe({
      next: (res) => {
        this.created.emit(res as ProductListModel);
        this.visible.set(false);
      },
    });
  }
}
