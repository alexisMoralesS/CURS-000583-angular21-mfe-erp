import { AppConfigService } from 'lib-erp-modular';
import { computed, inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { ProductCategoryDto } from '../dtos/product-category.dto';
import { ProductCategoryModel } from '../models/product-category.model';
import { ProductCategoryMapper } from '../mapps/product-category.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  private readonly config = inject(AppConfigService);

  private readonly apiUrl = `${this.config.value.apiUrl}/api`;
  productCategoryResource = httpResource<ProductCategoryDto[]>(() => ({
    url: `${this.apiUrl}/product-categories`,
  }));

  productCategories = computed<ProductCategoryModel[]>(() =>
    ProductCategoryMapper.dtosToModels(this.productCategoryResource.value() ?? []),
  );
}
