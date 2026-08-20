import { AppConfigService } from 'lib-erp-modular';
import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { SaleListMapper } from '../sales/mapper/sale-list.mapper';
import { SaleCatalogMapper } from '../sales/mapper/sale-catalog.mapper';
import { SaleCatalogDto } from '../sales/dtos/sale-catalog.dto';
import { map, Observable } from 'rxjs';
import { SaleCatalogModel } from '../sales/models/sale-catalog.model';
import { SaleCreateModel } from '../sales/models/sale-create.model';
import { SaleCreateMapper } from '../sales/mapper/sale-create.mapper';
import { SaleListDto } from '../sales/dtos/sale-list.dto';
import { SaleListModel } from '../sales/models/sale-list.model';
import { SaleShowMapper } from '../sales/mapper/sale-show.mapper';
import { SaleShowModel } from '../sales/models/sale-show.model';
import { SaleShowDto } from '../sales/dtos/sale-show.dt';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  private readonly http = inject(HttpClient);
  private readonly config = inject(AppConfigService);

  private readonly apiUrl = `${this.config.value.apiUrl}/api`;

  getAll(): Observable<SaleListModel[]> {
    return this.http
      .get<SaleListDto[]>(`${this.apiUrl}/sales`)
      .pipe(map((res) => SaleListMapper.dtosToModels(res)));
  }

  getCatalogs(): Observable<SaleCatalogModel> {
    return this.http
      .get<SaleCatalogDto>(`${this.apiUrl}/sales/catalogs`)
      .pipe(map((res: SaleCatalogDto) => SaleCatalogMapper.dtoToModel(res)));
  }
  create(data: SaleCreateModel): Observable<{ message: string }> {
    return this.http
      .post(`${this.apiUrl}/sales`, SaleCreateMapper.modelToDto(data))
      .pipe(map((res: any) => ({ message: res.message })));
  }
  show(saleId: number): Observable<SaleShowModel> {
    return this.http
      .get<SaleShowDto>(`${this.apiUrl}/sales/${saleId}`)
      .pipe(map((res: SaleShowDto) => SaleShowMapper.dtoToModel(res)));
  }
}
