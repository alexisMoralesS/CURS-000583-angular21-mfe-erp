import { ProductCreateDto } from '../dtos/product-create.dto';
import { ProductCreateModel } from '../models/product-create.model';

export class ProductCreateMapper {
  static modelToDto(model: ProductCreateModel): ProductCreateDto {
    return {
      code: model.code,
      brandId: model.brandId,
      categoryId: model.categoryId,
      name: model.name,
      price: model.price,
      minStock: model.minStock,
    };
  }
}
