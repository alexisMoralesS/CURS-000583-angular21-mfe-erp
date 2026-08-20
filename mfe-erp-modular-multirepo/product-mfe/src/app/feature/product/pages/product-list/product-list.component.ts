import { Component, inject, signal } from '@angular/core';
import { ProductListTableComponent } from '../../components/product-list-table/product-list-table.component';
import { ProductService } from '../../services/product.service';
import { ButtonModule } from 'primeng/button';
import { ProductCreateComponent } from '../../facades/product-create/product-create.component';

@Component({
  selector: 'app-product-list',
  imports: [
    //
    ProductListTableComponent,
    ProductCreateComponent,
    ButtonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export default class ProductListComponent {
  protected readonly productService = inject(ProductService);
  protected readonly products = this.productService.products;

  protected productCreateVisible = signal<boolean>(false);

  onCreated(): void {
    this.productService.ProductResource.reload();
  }
}
