import { HeaderContainer, LinkButton, Logo, CartInfo } from "./styles";

import LogoImg from "../../assets/logo.svg";

const HeaderRestaurante = () => {
  return (
    <HeaderContainer>
      <LinkButton href="/">Restaurantes</LinkButton>
      <Logo src={LogoImg} alt="efood" />
      <CartInfo>0 produto(s) no carrinho</CartInfo>
    </HeaderContainer>
  );
};

export default HeaderRestaurante;
