import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderRestaurante from "../../components/HeaderRestaurante";
import Footer from "../../components/Footer";
import { Container } from "../../styles";
import BannerRestaurante from "../../components/BannerRestaurante";
import ProductList from "../../components/ProductList";
import ProductModal from "../../components/ProductModal";
import { Restaurante, Produto } from "../../types";

const RestaurantePage = () => {
  const { id } = useParams(); // vem como string
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Produto | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://ebac-fake-api.vercel.app/api/efood/restaurantes"
        );
        const data: Restaurante[] = await res.json();
        setRestaurantes(data);
      } catch {
        setError("Não foi possível carregar o restaurante.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const restaurante = useMemo(
    () => restaurantes.find((r) => String(r.id) === String(id)),
    [restaurantes, id]
  );

  if (loading)
    return (
      <p className="container" style={{ padding: 24 }}>
        Carregando...
      </p>
    );
  if (error || !restaurante)
    return (
      <p className="container" style={{ padding: 24 }}>
        {error ?? "Restaurante não encontrado."}
      </p>
    );

  // converte cardápio da API para o formato do ProductList
  const products = restaurante.cardapio.map((p) => ({
    title: p.nome,
    description: p.descricao,
    image: p.foto,
  }));

  return (
    <>
      <HeaderRestaurante />

      <BannerRestaurante
        title={restaurante.titulo}
        category={restaurante.tipo}
        background={restaurante.capa}
      />

      <Container>
        <ProductList
          products={products}
          onAdd={(product) => {
            // encontra o produto original para mandar para a modal (com preço/porção)
            const original = restaurante.cardapio.find(
              (p) => p.nome === product.title
            );
            setSelected(original ?? null);
            setOpen(true);
          }}
        />
      </Container>

      <ProductModal
        open={open}
        onClose={() => setOpen(false)}
        product={selected}
      />

      <Footer />
    </>
  );
};

export default RestaurantePage;
