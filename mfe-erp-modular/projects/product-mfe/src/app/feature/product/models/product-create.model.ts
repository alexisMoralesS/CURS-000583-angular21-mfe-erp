import { ProductListModel } from './product-list.model';

export interface ProductCreateModel extends Omit<ProductListModel, 'id' | 'category' | 'brand'> {
  categoryId: string;
  brandId: string;
}
