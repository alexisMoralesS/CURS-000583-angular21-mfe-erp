export interface SaleCreateModel {
  seriesId: number;
  paymentMethodId: number;
  customerId: number;
  subtotal: number;
  igv: number;
  total: number;
  products: SaleCreateProductDto[];
}

export interface SaleCreateProductDto {
  id: string;
  quantity: number;
  price: number;
  subtotal: number;
}
