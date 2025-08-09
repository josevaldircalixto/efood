import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  closeCart,
  goToDelivery,
  goToPayment,
  backToCart,
  backToDelivery,
  showConfirm,
} from "../../store/uiSlice";
import {
  addItem,
  decreaseItem,
  removeItem,
  selectCartTotal,
  clearCart,
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
  Form,
  Label,
  Input,
  Row,
  Subtle,
} from "./styles";
import { formatCurrency } from "../../utils/format";
import { useState } from "react";
import { postCheckout } from "../../services/checkout";
import { CheckoutPayload, DeliveryData, PaymentData } from "../../types";

const CartDrawer = () => {
  const { isCartOpen, stage, orderId } = useSelector((s: RootState) => s.ui);
  const items = useSelector((s: RootState) => s.cart.items);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  // estados locais dos formulários
  const [delivery, setDelivery] = useState<DeliveryData>({
    receiver: "",
    address: "",
    city: "",
    zipCode: "",
    number: "",
    complement: "",
  });

  const [payment, setPayment] = useState<PaymentData>({
    cardName: "",
    cardNumber: "",
    cvv: "",
    expiresMonth: "",
    expiresYear: "",
  });

  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmitCheckout = async () => {
    setError(null);
    setSending(true);
    try {
      const payload: CheckoutPayload = {
        products: items.map((i) => ({ id: i.id, price: i.preco })),
        delivery,
        payment,
      };
      const res = await postCheckout(payload); // { orderId }
      dispatch(showConfirm(res.orderId));
      dispatch(clearCart());
    } catch (e) {
      setError("Não foi possível finalizar o pagamento. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Overlay open={isCartOpen} onClick={() => dispatch(closeCart())} />

      {!isCartOpen ? null : (
        <Panel aria-label="Carrinho lateral">
          {stage === "CART" && (
            <>
              {items.map((it) => (
                <Item key={it.id}>
                  <img src={it.foto} alt={it.nome} />
                  <div>
                    <strong>{it.nome}</strong>
                    <div>{formatCurrency(it.preco)}</div>
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

              <Action onClick={() => dispatch(goToDelivery())}>
                Continuar com a entrega
              </Action>
            </>
          )}

          {stage === "DELIVERY" && (
            <>
              <Title>Entrega</Title>

              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(goToPayment());
                }}
              >
                <div>
                  <Label>Quem irá receber</Label>
                  <Input
                    value={delivery.receiver}
                    onChange={(e) =>
                      setDelivery({ ...delivery, receiver: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label>Endereço</Label>
                  <Input
                    value={delivery.address}
                    onChange={(e) =>
                      setDelivery({ ...delivery, address: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label>Cidade</Label>
                  <Input
                    value={delivery.city}
                    onChange={(e) =>
                      setDelivery({ ...delivery, city: e.target.value })
                    }
                    required
                  />
                </div>

                <Row>
                  <div>
                    <Label>CEP</Label>
                    <Input
                      value={delivery.zipCode}
                      onChange={(e) =>
                        setDelivery({ ...delivery, zipCode: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>Número</Label>
                    <Input
                      value={delivery.number}
                      onChange={(e) =>
                        setDelivery({ ...delivery, number: e.target.value })
                      }
                      required
                    />
                  </div>
                </Row>

                <div>
                  <Label>Complemento (opcional)</Label>
                  <Input
                    value={delivery.complement}
                    onChange={(e) =>
                      setDelivery({ ...delivery, complement: e.target.value })
                    }
                  />
                </div>

                <Action type="submit">Continuar com o pagamento</Action>
              </Form>

              <Subtle type="button" onClick={() => dispatch(backToCart())}>
                Voltar para o carrinho
              </Subtle>
            </>
          )}

          {stage === "PAYMENT" && (
            <>
              <Title>Pagamento — Valor a pagar {formatCurrency(total)}</Title>

              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitCheckout();
                }}
              >
                <div>
                  <Label>Nome no cartão</Label>
                  <Input
                    value={payment.cardName}
                    onChange={(e) =>
                      setPayment({ ...payment, cardName: e.target.value })
                    }
                    required
                  />
                </div>

                <Row>
                  <div>
                    <Label>Número do cartão</Label>
                    <Input
                      value={payment.cardNumber}
                      onChange={(e) =>
                        setPayment({ ...payment, cardNumber: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>CVV</Label>
                    <Input
                      value={payment.cvv}
                      onChange={(e) =>
                        setPayment({ ...payment, cvv: e.target.value })
                      }
                      required
                    />
                  </div>
                </Row>

                <Row>
                  <div>
                    <Label>Mês de vencimento</Label>
                    <Input
                      value={payment.expiresMonth}
                      onChange={(e) =>
                        setPayment({ ...payment, expiresMonth: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label>Ano de vencimento</Label>
                    <Input
                      value={payment.expiresYear}
                      onChange={(e) =>
                        setPayment({ ...payment, expiresYear: e.target.value })
                      }
                      required
                    />
                  </div>
                </Row>

                {error && <p style={{ color: "#fff" }}>{error}</p>}

                <Action type="submit" disabled={sending}>
                  {sending ? "Finalizando..." : "Finalizar pagamento"}
                </Action>
              </Form>

              <Subtle type="button" onClick={() => dispatch(backToDelivery())}>
                Voltar para a edição de endereço
              </Subtle>
            </>
          )}

          {stage === "CONFIRM" && (
            <>
              <Title>
                Pedido realizado — {orderId ? `( ${orderId} )` : ""}
              </Title>
              <p style={{ lineHeight: 1.4 }}>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue pelo entregador do
                restaurante. <br />
                <br />
                Lembre-se de higienizar as mãos após o recebimento do pedido e
                tenha uma ótima refeição!
              </p>

              <Action onClick={() => dispatch(closeCart())}>Concluir</Action>
            </>
          )}
        </Panel>
      )}
    </>
  );
};

export default CartDrawer;
