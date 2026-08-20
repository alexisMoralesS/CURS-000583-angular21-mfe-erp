import { SaleCreateDto } from '../dtos/sale-create.dto';
import { SaleCreateModel } from '../models/sale-create.model';

export class SaleCreateMapper {
  static modelToDto(model: SaleCreateModel): SaleCreateDto {
    return {
      serieId: model.seriesId,
      paymentMethodId: model.paymentMethodId,
      customerId: model.customerId,
      subtotal: model.subtotal,
      igv: model.igv,
      total: model.total,
      products: model.products,
    };
  }
}
