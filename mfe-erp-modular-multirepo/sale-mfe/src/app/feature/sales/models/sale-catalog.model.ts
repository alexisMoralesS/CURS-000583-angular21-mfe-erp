import { PaymentMethodListModel } from './payment-method-list.model';
import { TypeReceiptListModel } from './type-receipt-list.model';

export interface SaleCatalogModel {
  typeReceipts: TypeReceiptListModel[];
  paymentMethod: PaymentMethodListModel[];
}
