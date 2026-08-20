import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductListDto } from '../dtos/product-list.dto';
import { AppConfigService } from 'lib-erp-modular';
import { ProductListMapper } from '../mappers/product-list.mapper';
import { ProductCreateModel } from '../models/product-create.model';
import { ProductCreateDto } from '../dtos/product-create.dto';
import { ProductCreateMapper } from '../mappers/product-create.mapper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly config = inject(AppConfigService);

  private readonly apiUrl = `${this.config.value.apiUrl}/api`;

  ProductResource = httpResource<ProductListDto[]>(() => ({
    url: `${this.apiUrl}/products`,
  }));

  products = computed(() => {
    return ProductListMapper.dtosToModels(this.ProductResource.value() ?? []);
  });

  readonly search = signal('');
  productsSearchResource = httpResource<ProductListDto[]>(() => ({
    url: `${this.apiUrl}/products/search`,
    params: {
      search: this.search(),
    },
  }));
  productsSearch = computed(() =>
    ProductListMapper.dtosToModels(this.productsSearchResource.value() ?? []),
  );

  save(body: ProductCreateModel) {
    return this.http
      .post<ProductListDto>(`${this.apiUrl}/products`, {
        ...ProductCreateMapper.modelToDto(body),
      })
      .pipe(map((res) => ProductListMapper.dtoToModel(res)));
  }
}
