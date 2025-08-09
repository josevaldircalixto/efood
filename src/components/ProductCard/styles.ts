import styled from "styled-components";

export const Card = styled.div`
  background-color: #e66767;
  padding: 8px;
  border-radius: 8px;
  color: #fff;
  max-width: 320px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 8px auto 8px;
`;

export const Button = styled.button`
  display: flex;
  background-color: #fff;
  color: #e66767;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  width: 304px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;
