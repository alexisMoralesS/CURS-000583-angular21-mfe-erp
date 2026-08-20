import { DocumentTypeModel } from '../models/document-type.model';
import { DocumentTypeDto } from './../dtos/document-type.dto';
export class DocumentTypeMapper {
  static dtoToModel(dto: DocumentTypeDto): DocumentTypeModel {
    return {
      id: dto.id,
      name: dto.name,
    };
  }

  static dtosToModels(dtos: DocumentTypeDto[]): DocumentTypeModel[] {
    return dtos.map((dto) => this.dtoToModel(dto));
  }
}
