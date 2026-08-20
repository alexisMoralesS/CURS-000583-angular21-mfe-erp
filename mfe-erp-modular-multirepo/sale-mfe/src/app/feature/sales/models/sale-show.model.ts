export interface SaleShowModel {
  id: number;
  subtotal: number;
  ivg: number;
  total: number;
  createdAt: string;
  customerName: string;
  paymentMethod: PaymentMethod;
  serie: Serie;
  typeReceipt: TypeReceipt;
  products: Product[];
}

interface PaymentMethod {
  id: number;
  name: string;
}

interface Product {
  id: number;
  code: string;
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
}

interface Serie {
  id: number;
  number: string;
}

interface TypeReceipt {
  id: string;
  name: string;
}
