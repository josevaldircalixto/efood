import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Info,
  Title,
  Description,
  Tag,
  Button,
  TitleRate,
} from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
  tag1?: string;
  tag2: string;
  rating: number;
};

const RestaurantCard = ({
  title,
  description,
  image,
  tag1,
  tag2,
  rating,
}: Props) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <div className="tagsSuperiores">
        {tag1 && <Tag>{tag1}</Tag>}
        <Tag>{tag2}</Tag>
      </div>
      <Info>
        <TitleRate>
          <Title>{title}</Title>
          <span> {rating.toFixed(1)} ⭐</span>
        </TitleRate>
        <Description>{description}</Description>
        <div>
          <Button>Saiba mais</Button>
        </div>
      </Info>
    </Card>
  );
};

export default RestaurantCard;
