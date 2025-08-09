import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantCard from "../../components/RestaurantCard";
import Sushi from "../../assets/sushi.png";
import Pasta from "../../assets/pasta.png";
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: "hioki-sushi",
    title: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    image: Sushi,
    tag1: "Destaque da Semana",
    tag2: "Japonesa",
    rating: 4.9,
  },
  {
    id: "la-dolce-vita",
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: Pasta,
    tag1: "",
    tag2: "Italiana",
    rating: 4.6,
  },
  {
    id: "la-dolce-vita",
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: Pasta,
    tag1: "",
    tag2: "Italiana",
    rating: 4.6,
  },
  {
    id: "la-dolce-vita",
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: Pasta,
    tag1: "",
    tag2: "Italiana",
    rating: 4.6,
  },
  {
    id: "la-dolce-vita",
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: Pasta,
    tag1: "",
    tag2: "Italiana",
    rating: 4.6,
  },
  {
    id: "la-dolce-vita",
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: Pasta,
    tag1: "",
    tag2: "Italiana",
    rating: 4.6,
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            padding: "32px 0",
          }}
        >
          {restaurants.map((rest) => (
            <Link
              key={rest.id}
              to={`/restaurante/${rest.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestaurantCard
                title={rest.title}
                description={rest.description}
                image={rest.image}
                tag1={rest.tag1}
                tag2={rest.tag2}
                rating={rest.rating}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
