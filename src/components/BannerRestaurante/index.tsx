import { Container } from "../../styles";
import { Banner, Category, Title } from "./styles";
import bannerImage from "../../assets/imagemdefundo.png";

interface Props {
  title: string;
  category: string;
}

const BannerRestaurante = ({ title, category }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
      <Container>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </Container>
    </Banner>
  );
};

export default BannerRestaurante;
