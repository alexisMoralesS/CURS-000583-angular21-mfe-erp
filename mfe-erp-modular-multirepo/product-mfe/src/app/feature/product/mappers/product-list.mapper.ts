import { ProductBrandMapper } from '../../../shared/mapps/product-brand.mapper';
import { ProductListDto } from '../dtos/product-list.dto';
import { ProductListModel } from '../models/product-list.model';
import { ProductCategoryMapper } from '../../../shared/mapps/product-category.mapper';

export class ProductListMapper {
  static dtoToModel(dto: ProductListDto): ProductListModel {
    return {
      id: dto.id,
      code: dto.code,
      brand: ProductBrandMapper.dtoToModel(dto.productBrand),
      category: ProductCategoryMapper.dtoToModel(dto.productCategory),
      name: dto.name,
      price: dto.price,
      minStock: dto.minStock,
    };
  }

  static dtosToModels(dtos: ProductListDto[]): ProductListModel[] {
    return dtos.map((dto) => this.dtoToModel(dto));
  }
}
