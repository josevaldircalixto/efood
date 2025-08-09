// src/pages/Carrinho/index.tsx
import HeaderRestaurante from "../../components/HeaderRestaurante";
import Footer from "../../components/Footer";
import { Container } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  removeItem,
  decreaseItem,
  addItem,
  selectCartTotal,
} from "../../store/cartSlice";
import styled from "styled-components";
import { formatCurrency } from "../../utils/format";

const Box = styled.div`
  max-width: 720px;
  margin: 24px auto;
  background: #e66767;
  color: #fff;
  border-radius: 8px;
  padding: 16px;
`;

const Line = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr auto auto;
  gap: 12px;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px;
  & + & {
    margin-top: 8px;
  }

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 4px;
  }
  strong {
    display: block;
  }
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    background: #fff;
    color: #e66767;
    border: 0;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Remove = styled.button`
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;

const TotalBar = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 700;
  }
  button {
    background: #fff;
    color: #e66767;
    font-weight: 700;
    border: 0;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
  }
`;

const Carrinho = () => {
  const items = useSelector((s: RootState) => s.cart.items);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <>
      <HeaderRestaurante />
      <Container>
        <Box>
          {items.length === 0 && <p>Seu carrinho está vazio.</p>}

          {items.map((it) => (
            <Line key={it.id}>
              <img src={it.foto} alt={it.nome} />
              <div>
                <strong>{it.nome}</strong>
                <div style={{ opacity: 0.9 }}>{formatCurrency(it.preco)}</div>
              </div>

              <Qty>
                <button onClick={() => dispatch(decreaseItem(it.id))}>-</button>
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

              <Remove onClick={() => dispatch(removeItem(it.id))}>🗑</Remove>
            </Line>
          ))}

          <TotalBar>
            <p>Valor total</p>
            <p>{formatCurrency(total)}</p>
          </TotalBar>

          <TotalBar>
            <div />
            <button>Continuar com a entrega</button>
          </TotalBar>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Carrinho;
