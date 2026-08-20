export interface SaleCreateDto {
  serieId: number;
  paymentMethodId: number;
  customerId: number;
  subtotal: number;
  igv: number;
  total: number;
  products: {
    id: string;
    quantity: number;
    price: number;
    subtotal: number;
  }[];
}
