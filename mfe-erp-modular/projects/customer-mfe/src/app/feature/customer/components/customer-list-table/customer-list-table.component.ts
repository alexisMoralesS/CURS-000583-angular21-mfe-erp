import { Component, input, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CustomerModel } from '../../models/customer.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-customer-list-table',
  imports: [TableModule, ButtonModule],
  templateUrl: './customer-list-table.component.html',
  styleUrl: './customer-list-table.component.css',
})
export class CustomerListTableComponent {
  customers = input<CustomerModel[]>([]);
}
