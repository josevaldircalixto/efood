// src/components/CartDrawer/styles.ts
import styled, { keyframes } from "styled-components";
import { cores } from "../../styles";

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

export const Overlay = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const Panel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: min(360px, 100%);
  height: 100%;
  background: ${cores.laranja};
  color: #fff;
  z-index: 1000;
  padding: 12px;
  animation: ${slideIn} 0.2s ease-out;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h3`
  margin: 8px 8px 0;
  font-size: 16px;
  font-weight: 700;
`;

export const Item = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px;
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 8px;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const Remove = styled.button`
  background: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;

export const Qty = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-left: 8px;

  button {
    background: #fff;
    color: ${cores.laranja};
    border: 0;
    width: 22px;
    height: 22px;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
    line-height: 1;
  }
`;

export const TotalBar = styled.div`
  margin-top: auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const Action = styled.button`
  background: #fff;
  color: ${cores.laranja};
  border: 0;
  border-radius: 4px;
  padding: 10px 12px;
  font-weight: 700;
  cursor: pointer;
`;
