import {
  Overlay,
  Box,
  Close,
  Photo,
  Title,
  Desc,
  Portion,
  BuyBtn,
} from "./styles";
import { Produto } from "../../types";
import { formatCurrency } from "../../utils/format";

type Props = {
  open: boolean;
  onClose: () => void;
  product?: Produto | null;
};

const ProductModal = ({ open, onClose, product }: Props) => {
  if (!product) return null;

  return (
    <Overlay open={open} onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Photo src={product.foto} alt={product.nome} />
        <div>
          <Close onClick={onClose}>×</Close>
          <Title>{product.nome}</Title>
          <Desc>{product.descricao}</Desc>
          <Portion>Serve: {product.porcao}</Portion>
          <BuyBtn>
            Adicionar ao carrinho – {formatCurrency(product.preco)}
          </BuyBtn>
        </div>
      </Box>
    </Overlay>
  );
};

export default ProductModal;
