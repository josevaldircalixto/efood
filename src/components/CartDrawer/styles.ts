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
  margin: 8px;
  font-size: 18px;
  font-weight: bold;
`;

export const Item = styled.div`
  height: 100px;
  background: ${cores.laranjaClaro};
  color: ${cores.laranja};
  border-radius: 8px;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 3fr auto;
  gap: 8px;
  align-items: center;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }

  strong {
    margin-bottom: 16px;
  }
`;

export const Remove = styled.button`
  background: transparent;
  border: 0;
  color: ${cores.laranja};
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  right: 8px;
  bottom: 8px;
`;

export const Qty = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
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
  margin-top: 8px;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const Action = styled.button`
  background: ${cores.laranjaClaro};
  color: ${cores.laranja};
  border: 0;
  border-radius: 4px;
  padding: 10px 12px;
  font-weight: 700;
  cursor: pointer;
`;

/** ------- forms ------- */
export const Form = styled.form`
  display: grid;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  background: #fff;
  color: ${cores.laranja};
  border: 0;
  border-radius: 4px;
  height: 28px;
  padding: 0 8px;
  font-weight: 700;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export const Subtle = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 700;
`;
