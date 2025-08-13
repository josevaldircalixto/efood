import { HeaderContainer, LinkButton, Logo, CartInfo } from "./styles";
import LogoImg from "../../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount } from "../../store/cartSlice";
import { openCart } from "../../store/uiSlice";

const HeaderRestaurante = () => {
  const count = useSelector(selectCartCount);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <div>
        <LinkButton href="/">Restaurantes</LinkButton>
        <Logo src={LogoImg} alt="efood" />
        <CartInfo as="button" onClick={() => dispatch(openCart())}>
          {count} produto(s) no carrinho
        </CartInfo>
      </div>
    </HeaderContainer>
  );
};

export default HeaderRestaurante;
