import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantCard from "../../components/RestaurantCard";
import Sushi from "../../assets/sushi.png";
import Pasta from "../../assets/pasta.png";

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
          <RestaurantCard
            title="Hioki Sushi"
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
            image={Sushi}
            tag1="Destaque da Semana"
            tag2="Japonesa"
            rating={4.9}
          />
          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={Pasta}
            tag1=""
            tag2="Italiana"
            rating={4.6}
          />

          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={Pasta}
            tag1=""
            tag2="Italiana"
            rating={4.6}
          />

          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={Pasta}
            tag1=""
            tag2="Italiana"
            rating={4.6}
          />

          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={Pasta}
            tag1=""
            tag2="Italiana"
            rating={4.6}
          />

          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={Pasta}
            tag1=""
            tag2="Italiana"
            rating={4.6}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
