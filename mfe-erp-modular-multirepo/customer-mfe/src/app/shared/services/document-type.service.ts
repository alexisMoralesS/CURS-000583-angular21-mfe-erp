import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { AppConfigService } from 'lib-erp-modular';
import { DocumentTypeDto } from '../dtos/document-type.dto';
import { DocumentTypeMapper } from '../mappers/document-type.mapper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentTypeService {
  private readonly config = inject(AppConfigService);

  private readonly apiUrl = `${this.config.value.apiUrl}/api`;
  documentTypeResource = httpResource<DocumentTypeDto[]>(() => ({
    url: `${this.apiUrl}/document-types`,
  }));

  documentTypes = computed(() =>
    DocumentTypeMapper.dtosToModels(this.documentTypeResource.value() ?? []),
  );
}
