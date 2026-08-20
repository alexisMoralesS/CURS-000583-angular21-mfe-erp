import { DocumentTypeService } from './../../../../shared/services/document-type.service';
import { PageLayoutComponent } from 'lib-erp-modular';

import { Component, inject, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CustomerServicesService } from '../../services/customer-services.service';
import { ButtonModule } from 'primeng/button';
import { CustomerListTableComponent } from '../../components/customer-list-table/customer-list-table.component';
import { CustomerCreateComponent } from '../../facades/customer-create/customer-create.component';
@Component({
  selector: 'app-customers-list',
  imports: [
    TableModule,
    ButtonModule,
    CustomerListTableComponent,
    CustomerCreateComponent,
    PageLayoutComponent,
  ],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css',
})
export default class CustomersListComponent {
  protected readonly customerService = inject(CustomerServicesService);
  protected readonly customers = this.customerService.customers;



  protected customerCreateVisible = signal<boolean>(false);
}
