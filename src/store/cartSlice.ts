import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../types";

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, "quantidade">>) {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantidade += 1;
      } else {
        state.items.push({ ...item, quantidade: 1 });
      }
    },
    decreaseItem(state, action: PayloadAction<number>) {
      const it = state.items.find((i) => i.id === action.payload);
      if (!it) return;
      if (it.quantidade > 1) it.quantidade -= 1;
      else state.items = state.items.filter((i) => i.id !== action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, decreaseItem, removeItem, clearCart } =
  cartSlice.actions;

export const selectCartCount = (s: { cart: CartState }) =>
  s.cart.items.reduce((acc, it) => acc + it.quantidade, 0);

export const selectCartTotal = (s: { cart: CartState }) =>
  s.cart.items.reduce((acc, it) => acc + it.preco * it.quantidade, 0);

export default cartSlice.reducer;
