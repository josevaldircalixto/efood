import styled from "styled-components";
import backbroundImage from "../../assets/fundo.png";
import { cores } from "../../styles";

export const HeaderContainer = styled.header`
  background-color: #fff0e6;
  background-image: url(${backbroundImage});
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 120px;
  height: 150px;

  @media (max-width: 768px) {
    padding: 16px 24px;
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
`;
