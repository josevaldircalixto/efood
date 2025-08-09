import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantCard from "../../components/RestaurantCard";
import { Link } from "react-router-dom";

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};

type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Produto[];
};

const Home = () => {
  const [lista, setLista] = useState<Restaurante[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const res = await fetch(
          "https://ebac-fake-api.vercel.app/api/efood/restaurantes"
        );
        const data: Restaurante[] = await res.json();
        setLista(data);
      } catch {
        setErro("Não foi possível carregar os restaurantes.");
      } finally {
        setCarregando(false);
      }
    };
    carregar();
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        {carregando && <p>Carregando...</p>}
        {erro && <p>{erro}</p>}

        {!carregando && !erro && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
              padding: "32px 0",
            }}
          >
            {lista.map((rest) => (
              <RestaurantCard
                key={rest.id}
                title={rest.titulo}
                description={rest.descricao}
                image={rest.capa}
                tag1={rest.destacado ? "Destaque da semana" : ""}
                tag2={rest.tipo}
                rating={rest.avaliacao}
                to={`/restaurante/${rest.id}`}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
