import { Container } from "../../styles";
import { Banner, Category, Title } from "./styles";

type Props = {
  title: string;
  category: string;
  background: string;
};

const BannerRestaurante = ({ title, category, background }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${background})` }}>
      <Container>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </Container>
    </Banner>
  );
};

export default BannerRestaurante;
