import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
  border: 1px solid #e66767;
  border-radius: 8px;
  overflow: hidden;
  max-width: 472px;
  width: 100%;
  position: relative;
  background: #fff;
`;

/* wrapper só da imagem – assim as tags ficam presas nela */
export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 217px; /* trava a altura da foto */
  object-fit: cover; /* corta sem distorcer */
  display: block;
`;

export const TagsTop = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`;

export const Info = styled.div`
  padding: 12px 16px 16px;
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
  color: #000;
  margin: 12px 0 16px;
  line-height: 22px;

  /* evita que textos enormes quebrem o card */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Tag = styled.span`
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 2px;
  padding: 6px 8px;
  margin-right: 8px; /* corrigido */
`;

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 14px;
`;
