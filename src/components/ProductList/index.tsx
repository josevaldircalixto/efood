// components/ProductList/index.tsx
import { Wrapper } from "./styles";
import ProductCard from "../ProductCard";

export interface Product {
  title: string;
  description: string;
  image: string;
}

interface Props {
  products: Product[];
  onAdd: (product: Product) => void;
}

const ProductList = ({ products, onAdd }: Props) => (
  <Wrapper>
    {products.map((product, i) => (
      <ProductCard
        key={i}
        title={product.title}
        description={product.description}
        image={product.image}
        onAdd={() => onAdd(product)} // <- dispara pro pai
      />
    ))}
  </Wrapper>
);

export default ProductList;
