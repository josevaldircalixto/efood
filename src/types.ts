export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};

export type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Produto[];
};

export type CartItem = {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  quantidade: number;
};

/** ------ Checkout ------ */
export type DeliveryData = {
  receiver: string;
  address: string;
  city: string;
  zipCode: string;
  number: string;
  complement?: string;
};

export type PaymentData = {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expiresMonth: string;
  expiresYear: string;
};

export type CheckoutPayload = {
  products: { id: number; price: number }[];
  delivery: DeliveryData;
  payment: PaymentData;
};

export type CheckoutResponse = {
  orderId: string;
};
