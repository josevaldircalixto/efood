import { Restaurante } from "../types";

const BASE_URL = "https://ebac-fake-api.vercel.app/api/efood";

export async function getRestaurantes(): Promise<Restaurante[]> {
  const res = await fetch(`${BASE_URL}/restaurantes`);
  if (!res.ok) throw new Error("Falha ao carregar restaurantes");
  return res.json();
}

export async function getRestaurante(id: string): Promise<Restaurante> {
  const res = await fetch(`${BASE_URL}/restaurantes/${id}`);
  if (!res.ok) throw new Error("Restaurante não encontrado");
  return res.json();
}
