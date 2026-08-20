export interface SaleListDto {
  id: number;
  subtotal: number;
  ivg: number;
  total: number;
  createdAt: Date;
  customerName: string;
  serie: {
    id: number;
    number: string;
  };
  typeReceipt: {
    id: number;
    name: string;
  };
}
