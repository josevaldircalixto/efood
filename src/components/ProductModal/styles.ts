import styled from "styled-components";
import { cores } from "../../styles";

export const Overlay = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "grid" : "none")};
  place-items: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const Box = styled.div`
  background: ${cores.laranja};
  color: #fff;
  width: min(840px, calc(100% - 32px));
  padding: 24px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 16px;
  position: relative;
`;

export const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 20px;
  background: transparent;
  border: 0;
  color: #fff;
`;

export const Photo = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
`;

export const Desc = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 8px;
`;

export const Portion = styled.p`
  font-size: 12px;
  opacity: 0.9;
  margin: 0 0 12px;
`;

export const BuyBtn = styled.button`
  background: #fff;
  color: ${cores.laranja};
  font-weight: 700;
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
`;
