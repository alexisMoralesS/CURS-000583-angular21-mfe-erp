import { PaymentMethodListDto } from './payment-method-list.dto';
import { TypeReceiptListDto } from './type-receipt-list.dto';

export interface SaleCatalogDto {
  typeReceipts: TypeReceiptListDto[];
  paymentMethod: PaymentMethodListDto[];
}
