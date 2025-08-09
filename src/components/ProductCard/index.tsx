import { Card, Image, Title, Description, Button } from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
};

const ProductCard = ({ title, description, image }: Props) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  );
};

export default ProductCard;
