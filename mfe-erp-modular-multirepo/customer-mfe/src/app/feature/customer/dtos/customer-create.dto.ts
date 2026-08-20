import { CustomerDto } from './customer.dto';

export interface CustomerCreateDto extends Omit<CustomerDto, 'id' | 'documentType'> {
  documentTypeId: string;
}
