import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
  border: 1px solid #e66767;
  border-radius: 8px;
  overflow: hidden;
  max-width: 472px;
  height: 398px;
  position: relative;

  .tagsSuperiores {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 8px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Info = styled.div`
  padding: 8px;
`;

export const TitleRate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${cores.laranja};
    font-weight: bold;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  color: ${cores.laranja};
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${cores.laranja};
  margin: 16px 0px;
  line-height: 22px;
`;

export const Tag = styled.span`
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 2px;
  margin-right: 8pxs;
  padding: 6px 4px;
`;

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 14px;
`;

export {};
