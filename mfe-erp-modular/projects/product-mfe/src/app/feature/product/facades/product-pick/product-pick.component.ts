import { EventBusService, MFE_PRODUCT_EVENTS, ProductSelectedDto } from 'lib-erp-modular';
import { TooltipModule } from 'primeng/tooltip';
import { AutoCompleteModule, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductService } from '../../services/product.service';
import { ProductListModel } from '../../models/product-list.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-pick',
  imports: [
    FormsModule,

    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,

    ProductCreateComponent,
  ],
  templateUrl: './product-pick.component.html',
  styleUrl: './product-pick.component.css',
})
export class ProductPickComponent {
  private readonly eventBus = inject(EventBusService);

  protected productCreateVisible = signal<boolean>(false);
  protected selectedProduct = signal<ProductListModel | null>(null);

  protected readonly productService = inject(ProductService);
  protected readonly products = this.productService.productsSearch;

  search(event: any) {
    this.productService.search.set(event.query ?? '');
  }

  onCreated(product: ProductListModel) {
    this.selectedProduct.set(product);
    this.productEventemit(product);
  }

  onClear() {
    this.productEventemit(null);
  }

  onSelect(event: AutoCompleteSelectEvent): void {
    this.selectedProduct.set(event.value);

    this.productEventemit(event.value);
  }

  productEventemit(product: ProductListModel | null) {
    let productDto: ProductSelectedDto | null = null;
    if (product != null) {
      productDto = {
        id: product.id,
        name: product.name,
        price: product.price,
      };
    }
    this.eventBus.emit(MFE_PRODUCT_EVENTS.PRODUCT_SELECTED, productDto);
  }
}
