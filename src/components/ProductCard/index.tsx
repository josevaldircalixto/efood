// components/ProductCard/index.tsx
import { Card, Image, Title, Description, Button } from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
  onAdd?: () => void;
};

const ProductCard = ({ title, description, image, onAdd }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button onClick={onAdd}>Adicionar ao carrinho</Button>
  </Card>
);

export default ProductCard;
