import { DocumentTypeMapper } from '../../../shared/mappers/document-type.mapper';
import { CustomerDto } from '../dtos/customer.dto';
import { CustomerModel } from '../models/customer.model';

export class CustomerMapper {
  static dtoToModel(dto: CustomerDto): CustomerModel {
    return {
      id: dto.id,
      name: dto.name,
      documentType: DocumentTypeMapper.dtoToModel(dto.documentType),
      numberDocument: dto.numberDocument,
      email: dto.email,
      phone: dto.phone,
    };
  }
  static dtosToModles(dtos: CustomerDto[]): CustomerModel[] {
    return dtos.map((item) => this.dtoToModel(item));
  }
}
