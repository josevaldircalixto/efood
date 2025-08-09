// src/components/CartDrawer/index.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { closeCart } from "../../store/uiSlice";
import {
  addItem,
  decreaseItem,
  removeItem,
  selectCartTotal,
} from "../../store/cartSlice";
import {
  Overlay,
  Panel,
  Title,
  Item,
  Remove,
  Qty,
  TotalBar,
  Action,
} from "./styles";
import { formatCurrency } from "../../utils/format";

const CartDrawer = () => {
  const open = useSelector((s: RootState) => s.ui.isCartOpen);
  const items = useSelector((s: RootState) => s.cart.items);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <>
      <Overlay open={open} onClick={() => dispatch(closeCart())} />
      {open && (
        <Panel aria-label="Carrinho lateral">
          <Title>Seu carrinho</Title>

          {items.map((it) => (
            <Item key={it.id}>
              <img src={it.foto} alt={it.nome} />
              <div>
                <strong>{it.nome}</strong>
                <div style={{ opacity: 0.9 }}>{formatCurrency(it.preco)}</div>
                <Qty>
                  <button onClick={() => dispatch(decreaseItem(it.id))}>
                    -
                  </button>
                  <span>{it.quantidade}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        addItem({
                          id: it.id,
                          nome: it.nome,
                          foto: it.foto,
                          preco: it.preco,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </Qty>
              </div>
              <Remove
                title="Remover"
                onClick={() => dispatch(removeItem(it.id))}
              >
                🗑
              </Remove>
            </Item>
          ))}

          <TotalBar>
            <span>Valor total</span>
            <span>{formatCurrency(total)}</span>
          </TotalBar>

          <Action>Continuar com a entrega</Action>
        </Panel>
      )}
    </>
  );
};

export default CartDrawer;
