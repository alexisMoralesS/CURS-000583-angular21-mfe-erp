import { httpResource } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { AppConfigService } from 'lib-erp-modular';
import { ProductBrandDto } from '../dtos/product-brand.dto';
import { ProductBrandMapper } from '../mapps/product-brand.mapper';
import { ProductBrandModel } from '../models/product-brand.model';

@Injectable({
  providedIn: 'root',
})
export class ProductBrandService {
  private readonly config = inject(AppConfigService);

  private readonly apiUrl = `${this.config.value.apiUrl}/api`;
  productBrandResource = httpResource<ProductBrandDto[]>(() => ({
    url: `${this.apiUrl}/product-brands`,
  }));

  productBrands = computed<ProductBrandModel[]>(() =>
    ProductBrandMapper.dtosToModels(this.productBrandResource.value() ?? []),
  );
}
