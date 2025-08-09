import { Wrapper } from "./styles";
import ProductCard from "../ProductCard";

interface Product {
  title: string;
  description: string;
  image: string;
}

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Wrapper>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </Wrapper>
  );
};

export default ProductList;
