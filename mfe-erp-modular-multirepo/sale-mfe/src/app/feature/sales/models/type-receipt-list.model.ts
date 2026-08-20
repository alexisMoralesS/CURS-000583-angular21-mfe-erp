import { SerieListModel } from './serie-list.model';

export interface TypeReceiptListModel {
  id: number;
  name: string;
  series: SerieListModel[];
}
