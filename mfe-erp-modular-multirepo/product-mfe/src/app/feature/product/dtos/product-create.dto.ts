import { ProductListDto } from './product-list.dto';

export interface ProductCreateDto extends Omit<
  ProductListDto,
  'id' | 'productCategory' | 'productBrand'
> {
  categoryId: string;
  brandId: string;
}
