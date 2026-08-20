import { ProductCategoryDto } from '../../../shared/dtos/product-category.dto';
import { ProductBrandModel } from '../../../shared/models/product-brand.model';

export interface ProductListDto {
  id: string;
  code: string;
  name: string;
  productCategory: ProductCategoryDto;
  productBrand: ProductBrandModel;
  price: number;
  minStock: number;
}
