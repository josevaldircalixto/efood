import { Link } from "react-router-dom";
import {
  Card,
  ImageWrapper,
  Image,
  Info,
  Title,
  Description,
  Tag,
  Button,
  TitleRate,
  TagsTop,
} from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
  tag1?: string;
  tag2: string;
  rating: number;
  to?: string;
};

const RestaurantCard = ({
  title,
  description,
  image,
  tag1,
  tag2,
  rating,
  to,
}: Props) => (
  <Card>
    <ImageWrapper>
      <Image src={image} alt={title} />
      <TagsTop>
        {tag1 && <Tag>{tag1}</Tag>}
        <Tag>{tag2}</Tag>
      </TagsTop>
    </ImageWrapper>

    <Info>
      <TitleRate>
        <Title>{title}</Title>
        <span>{rating.toFixed(1)} ⭐</span>
      </TitleRate>
      <Description>{description}</Description>

      {/* Se tiver "to", o botão é um Link. Senão, é um button normal */}
      {to ? (
        <Button as={Link} to={to}>
          Saiba mais
        </Button>
      ) : (
        <Button>Saiba mais</Button>
      )}
    </Info>
  </Card>
);

export default RestaurantCard;
