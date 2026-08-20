import { DocumentTypeModel } from '../../../shared/models/document-type.model';

export interface CustomerModel {
  id: string;
  name: string;
  documentType: DocumentTypeModel;
  numberDocument: string;
  phone: string;
  email: string;
}
