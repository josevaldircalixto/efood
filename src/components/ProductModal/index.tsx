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
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

type Props = {
  open: boolean;
  onClose: () => void;
  product?: Produto | null;
};

const ProductModal = ({ open, onClose, product }: Props) => {
  const dispatch = useDispatch();

  if (!product) return null;

  const handleAdd = () => {
    dispatch(
      addItem({
        id: product.id,
        nome: product.nome,
        foto: product.foto,
        preco: product.preco,
      })
    );
    onClose();
  };

  return (
    <Overlay open={open} onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Close onClick={onClose}>×</Close>

        <Photo src={product.foto} alt={product.nome} />
        <div>
          <Title>{product.nome}</Title>
          <Desc>{product.descricao}</Desc>
          <Portion>Serve: {product.porcao}</Portion>
          <BuyBtn onClick={handleAdd}>
            Adicionar ao carrinho — {formatCurrency(product.preco)}
          </BuyBtn>
        </div>
      </Box>
    </Overlay>
  );
};

export default ProductModal;
