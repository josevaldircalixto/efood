import styled from "styled-components";
import backbroundImage from "../../assets/fundo.png";
import { cores } from "../../styles";

export const HeaderContainer = styled.header`
  background-color: #fff0e6;
  background-image: url(${backbroundImage});
  padding: 16px 120px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
  }
`;

export const LinkButton = styled.a`
  color: ${cores.laranja};
  font-weight: bold;
  font-size: 18px;
`;

export const Logo = styled.img`
  height: 58px;
`;

export const CartInfo = styled.span`
  color: ${cores.laranja};
  font-weight: bold;
  font-size: 18px;
  background: none;
  border: none;
`;
