import HeaderRestaurante from "../../components/HeaderRestaurante";
import Footer from "../../components/Footer";
import { Container } from "../../styles";
import BannerRestaurante from "../../components/BannerRestaurante";
import ProductList from "../../components/ProductList";
import pizzaMarguerita from "../../assets/pizza_marguerita.png";

const products = [
  {
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite.",
    image: pizzaMarguerita,
  },
  {
    title: "Lasanha à Bolonhesa",
    description:
      "Camadas de massa, molho de tomate, carne moída e muito queijo gratinado. Um clássico irresistível.",
    image: pizzaMarguerita,
  },
  {
    title: "Risoto de Cogumelos",
    description:
      "Risoto cremoso preparado com cogumelos frescos, parmesão e um toque de vinho branco.",
    image: pizzaMarguerita,
  },
  {
    title: "Fettuccine Alfredo",
    description:
      "Fettuccine ao molho branco cremoso com parmesão e manteiga. Um prato leve e saboroso.",
    image: pizzaMarguerita,
  },
  {
    title: "Pizza Quatro Queijos",
    description:
      "Mussarela, gorgonzola, parmesão e catupiry sobre uma massa fina e crocante.",
    image: pizzaMarguerita,
  },
  {
    title: "Ravioli de Ricota e Espinafre",
    description:
      "Massa recheada com ricota cremosa e espinafre, servida com molho de tomate fresco.",
    image: pizzaMarguerita,
  },
];

const Restaurante = () => {
  return (
    <>
      <HeaderRestaurante />

      <BannerRestaurante title="La Dolce Vita Trattoria" category="Italiana" />

      <Container>
        <ProductList products={products} />
      </Container>

      <Footer />
    </>
  );
};

export default Restaurante;
