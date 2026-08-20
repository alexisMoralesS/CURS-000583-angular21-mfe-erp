import { PaymentMethodListDto } from '../dtos/payment-method-list.dto';
import { PaymentMethodListModel } from '../models/payment-method-list.model';

export class PaymentMethodListMapper {
  static dtoToModel(dto: PaymentMethodListDto): PaymentMethodListModel {
    return {
      id: dto.id,
      name: dto.name,
    };
  }

  static dtosToModels(dtos: PaymentMethodListDto[]): PaymentMethodListModel[] {
    return dtos.map((dto) => this.dtoToModel(dto));
  }
}
