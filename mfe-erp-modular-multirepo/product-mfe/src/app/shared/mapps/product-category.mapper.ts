import { ProductCategoryDto } from '../dtos/product-category.dto';
import { ProductCategoryModel } from '../models/product-category.model';

export class ProductCategoryMapper {
  static dtoToModel(dto: ProductCategoryDto): ProductCategoryModel {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
    };
  }

  static dtosToModels(dtos: ProductCategoryDto[]): ProductCategoryModel[] {
    return dtos.map((dto) => this.dtoToModel(dto));
  }
}
