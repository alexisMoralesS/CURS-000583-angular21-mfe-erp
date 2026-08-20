import { CustomerCreateDto } from '../dtos/customer-create.dto';
import { CustomerCreateModel } from '../models/customer-create.model';

export class CustomerCreateMapper {
  static modelToDto(model: CustomerCreateModel): CustomerCreateDto {
    return {
      name: model.name,
      documentTypeId: model.documentTypeId,
      numberDocument: model.numberDocument,
      email: model.email,
      phone: model.phone,
    };
  }
}
