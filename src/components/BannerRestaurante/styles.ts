import styled from "styled-components";

export const Banner = styled.div`
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px 0;
  color: #fff;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`;

export const Category = styled.span`
  position: absolute;
  font-size: 32px;
  font-weight: 100;
  opacity: 0.9;
  top: 25px;
`;
