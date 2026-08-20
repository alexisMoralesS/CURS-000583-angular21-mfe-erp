import { SaleListDto } from '../dtos/sale-list.dto';
import { SaleListModel } from '../models/sale-list.model';

export class SaleListMapper {
  static dtoToModel(dto: SaleListDto): SaleListModel {
    return {
      id: dto.id,
      serie: dto.serie,
      ivg: dto.ivg,
      total: dto.total,
      createdAt: dto.createdAt,
      customerName: dto.customerName,
      subtotal: dto.subtotal,
      typeReceipt: dto.typeReceipt,
    };
  }
  static dtosToModels(dtos: SaleListDto[]): SaleListModel[] {
    return dtos.map((d) => this.dtoToModel(d));
  }
}
