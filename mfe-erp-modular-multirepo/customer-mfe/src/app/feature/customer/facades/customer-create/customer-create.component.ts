import { EventBusService, MFE_CUSTOMER_EVENTS } from 'lib-erp-modular';
import { Component, inject, input, model, output, signal } from '@angular/core';
import { CustomerCreateModel } from '../../models/customer-create.model';
import { CustomerServicesService } from '../../services/customer-services.service';
import { CustomerFormCreateComponent } from '../../components/customer-form-create/customer-form-create.component';
import { DialogModule } from 'primeng/dialog';
import { CustomerModel } from '../../models/customer.model';
import { DocumentTypeService } from '../../../../shared/services/document-type.service';

@Component({
  selector: 'app-customer-create',
  imports: [DialogModule, CustomerFormCreateComponent],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.css',
})
export class CustomerCreateComponent {
  protected readonly customerService = inject(CustomerServicesService);

  protected readonly documentTypeService = inject(DocumentTypeService);
  protected readonly documentTypes = this.documentTypeService.documentTypes;



  public visible = model<boolean>(false);
  public created = output<CustomerModel>();

  constructor() {
  }
  customerSaved(customer: CustomerCreateModel): void {
    this.customerService.save(customer).subscribe({
      next: (res) => {
        this.created.emit(res as CustomerModel);
        this.visible.set(false);
      },
    });
  }
}
