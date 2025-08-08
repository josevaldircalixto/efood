import styled from "styled-components";
import backbroundImage from "../../assets/fundo.png";
import { cores } from "../../styles";

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${backbroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-size: cover;
  background-position: center;
  text-align: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 125px;
  margin-top: 44px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  margin-top: 138px;
  font-size: 36px;
  color: ${cores.laranja};
  font-weight: bold;
  margin-bottom: 40px;
`;
