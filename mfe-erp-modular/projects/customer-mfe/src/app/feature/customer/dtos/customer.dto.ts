import { DocumentTypeDto } from '../../../shared/dtos/document-type.dto';

export interface CustomerDto {
  id: string;
  name: string;
  documentType: DocumentTypeDto;
  // document_type_id: string;
  numberDocument: string;
  phone: string;
  email: string;
}
