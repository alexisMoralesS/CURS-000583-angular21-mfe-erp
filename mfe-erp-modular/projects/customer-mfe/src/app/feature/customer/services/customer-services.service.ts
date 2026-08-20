import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { CustomerDto } from '../dtos/customer.dto';
import { CustomerCreateModel } from '../models/customer-create.model';
import { CustomerMapper } from '../mappers/cusomer.mapper';
import { CustomerCreateMapper } from '../mappers/cusomer-create.mapper';
import { map } from 'rxjs';
import { AppConfigService } from 'lib-erp-modular';

@Injectable({
  providedIn: 'root',
})
export class CustomerServicesService {
  private readonly http = inject(HttpClient);
  private readonly config = inject(AppConfigService);

  private readonly apiUrl = `${this.config.value.apiUrl}/api`;

  readonly search = signal('');

  customersResource = httpResource<CustomerDto[]>(() => ({
    url: `${this.apiUrl}/customers`,
  }));
  customers = computed(() => CustomerMapper.dtosToModles(this.customersResource.value() ?? []));

  customersSearchResource = httpResource<CustomerDto[]>(() => ({
    url: `${this.apiUrl}/customers/search`,
    params: {
      search: this.search(),
    },
  }));
  customersSearch = computed(() =>
    CustomerMapper.dtosToModles(this.customersSearchResource.value() ?? []),
  );

  save(body: CustomerCreateModel) {
    return this.http
      .post<CustomerDto>(`${this.apiUrl}/customers`, { ...CustomerCreateMapper.modelToDto(body) })
      .pipe(map((res) => CustomerMapper.dtoToModel(res)));
  }

  getDocumenttypes() {
    return this.http.get(`${this.apiUrl}/document-types`);
  }
}
