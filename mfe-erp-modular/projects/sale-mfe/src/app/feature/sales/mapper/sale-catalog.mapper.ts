import { PaymentMethodListDto } from '../dtos/payment-method-list.dto';
import { SaleCatalogDto } from '../dtos/sale-catalog.dto';
import { PaymentMethodListModel } from '../models/payment-method-list.model';
import { SaleCatalogModel } from '../models/sale-catalog.model';
import { PaymentMethodListMapper } from './payment-method-list.mapper';
import { TypeReceiptListMapper } from './type-receipt-list.mapper';

export class SaleCatalogMapper {
  static dtoToModel(dto: SaleCatalogDto): SaleCatalogModel {
    return {
      paymentMethod: PaymentMethodListMapper.dtosToModels(dto.paymentMethod),
      typeReceipts: TypeReceiptListMapper.dtosToModels(dto.typeReceipts),
    };
  }

  static dtosToModels(dtos: SaleCatalogDto[]): SaleCatalogModel[] {
    return dtos.map((dto) => this.dtoToModel(dto));
  }
}
