import { ProductBrandModel } from '../../../shared/models/product-brand.model';
import { ProductCategoryModel } from '../../../shared/models/product-category.model';

export interface ProductListModel {
  id: string;
  code: string;
  name: string;
  category: ProductCategoryModel;
  brand: ProductBrandModel;
  price: number;
  minStock: number;
}
