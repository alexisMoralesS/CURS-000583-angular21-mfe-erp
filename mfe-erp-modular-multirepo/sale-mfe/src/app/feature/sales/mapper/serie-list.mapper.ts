import { SerieListDto } from '../dtos/serie-list.dto';
import { SerieListModel } from '../models/serie-list.model';

export class SerieListMapper {
  static dtoToModel(dto: SerieListDto): SerieListModel {
    return {
      id: dto.id,
      number: dto.number,
    };
  }

  static dtosToModels(dtos: SerieListDto[]): SerieListModel[] {
    return dtos.map((dto) => this.dtoToModel(dto));
  }
}
