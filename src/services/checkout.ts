import { CheckoutPayload, CheckoutResponse } from "../types";

const BASE = "https://ebac-fake-api.vercel.app/api/efood";

export async function postCheckout(
  payload: CheckoutPayload
): Promise<CheckoutResponse> {
  const res = await fetch(`${BASE}/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error("Falha ao finalizar o pedido");
  }
  return res.json();
}
