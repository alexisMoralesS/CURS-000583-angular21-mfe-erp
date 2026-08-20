import { SerieListDto } from "./serie-list.dto";

export interface TypeReceiptListDto {
  id: number;
  name: string;
  series: SerieListDto[];
}
