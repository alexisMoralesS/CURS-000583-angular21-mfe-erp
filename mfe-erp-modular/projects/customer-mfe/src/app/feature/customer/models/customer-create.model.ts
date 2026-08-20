import { CustomerModel } from './customer.model';

export interface CustomerCreateModel extends Omit<CustomerModel, 'id' | 'documentType'> {
  documentTypeId: string;
}
