import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #fff0e1;
  text-align: center;
  height: 298px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 125px;
  margin: 40px auto 32px;
`;

export const SocialIcons = styled.div`
  display: flex;
  height: 24px;
  width: 88px;
  gap: 16px;
  margin-bottom: 80px;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LegalText = styled.p`
  font-size: 10px;
  color: ${cores.laranja};
  max-width: 480px;
`;
