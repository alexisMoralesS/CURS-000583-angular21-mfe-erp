import { CustomerSelectedDto, EventBusService, MFE_CUSTOMER_EVENTS } from 'lib-erp-modular';
import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AutoCompleteModule, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { CustomerCreateComponent } from '../customer-create/customer-create.component';
import { CustomerServicesService } from '../../services/customer-services.service';
import { CustomerCreateModel } from '../../models/customer-create.model';
import { CustomerModel } from '../../models/customer.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-customer-pick',
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    AutoCompleteModule,
    TooltipModule,
    CustomerCreateComponent,
    FormsModule,
  ],
  templateUrl: './customer-pick.component.html',
  styleUrl: './customer-pick.component.css',
})
export class CustomerPickComponent {
  private readonly eventBus = inject(EventBusService);
  protected customerCreateVisible = signal<boolean>(false);
  protected selectedCustomer = signal<CustomerModel | null>(null);

  protected readonly customerService = inject(CustomerServicesService);
  protected readonly customers = this.customerService.customersSearch;
  search(event: any) {
    this.customerService.search.set(event.query ?? '');
  }
  onCreated(customer: CustomerModel) {
    this.selectedCustomer.set(customer);
    this.customerEventemit(customer);
  }
  onClear() {
    this.customerEventemit(null);
  }
  onSelect(event: AutoCompleteSelectEvent): void {
    this.customerEventemit(event.value);
  }
  customerEventemit(customer: CustomerModel | null) {
    let customerDto: CustomerSelectedDto | null = null;
    if (customer != null) {
      customerDto = {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        documentType: customer.documentType.id,
        numberDocument: customer.numberDocument,
        phone: customer.phone,
      };
    }
    this.eventBus.emit(MFE_CUSTOMER_EVENTS.CUSTOMER_SELECTED, customerDto);
  }
}
