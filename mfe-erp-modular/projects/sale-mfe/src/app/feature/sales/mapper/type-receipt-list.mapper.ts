import { TypeReceiptListDto } from '../dtos/type-receipt-list.dto';
import { TypeReceiptListModel } from '../models/type-receipt-list.model';
import { SerieListMapper } from './serie-list.mapper';

export class TypeReceiptListMapper {
  static dtoToModel(dto: TypeReceiptListDto): TypeReceiptListModel {
    return {
      id: dto.id,
      name: dto.name,
      series: SerieListMapper.dtosToModels(dto.series),
    };
  }

  static dtosToModels(dtos: TypeReceiptListDto[]): TypeReceiptListModel[] {
    return dtos.map((dto) => this.dtoToModel(dto));
  }
}
