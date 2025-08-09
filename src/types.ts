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
