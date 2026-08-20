import { SaleShowDto } from '../dtos/sale-show.dt';
import { SaleShowModel } from '../models/sale-show.model';

export class SaleShowMapper {
  static dtoToModel(dto: SaleShowDto): SaleShowModel {
    return {
      id: dto.id,
      createdAt: dto.createdAt,
      customerName: dto.customerName,
      ivg: dto.ivg,
      subtotal: dto.subtotal,
      total: dto.total,
      paymentMethod: dto.paymentMethod,
      serie: dto.serie,
      products: dto.products,
      typeReceipt: dto.typeReceipt,
    };
  }
}
