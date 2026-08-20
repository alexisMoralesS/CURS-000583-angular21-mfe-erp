import { ProductBrandDto } from '../dtos/product-brand.dto';
import { ProductBrandModel } from '../models/product-brand.model';

export class ProductBrandMapper {
  static dtoToModel(dto: ProductBrandDto): ProductBrandModel {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
    };
  }

  static dtosToModels(dtos: ProductBrandDto[]): ProductBrandModel[] {
    return dtos.map((dto) => this.dtoToModel(dto));
  }
}
