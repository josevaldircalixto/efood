import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DrawerStage = "CART" | "DELIVERY" | "PAYMENT" | "CONFIRM";

type UIState = {
  isCartOpen: boolean;
  stage: DrawerStage;
  orderId: string | null;
};

const initialState: UIState = {
  isCartOpen: false,
  stage: "CART",
  orderId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCart(state) {
      state.isCartOpen = true;
    },
    closeCart(state) {
      state.isCartOpen = false;
      state.stage = "CART";
      state.orderId = null;
    },
    goToDelivery(state) {
      state.stage = "DELIVERY";
    },
    goToPayment(state) {
      state.stage = "PAYMENT";
    },
    backToCart(state) {
      state.stage = "CART";
    },
    backToDelivery(state) {
      state.stage = "DELIVERY";
    },
    showConfirm(state, action: PayloadAction<string>) {
      state.stage = "CONFIRM";
      state.orderId = action.payload;
    },
  },
});

export const {
  openCart,
  closeCart,
  goToDelivery,
  goToPayment,
  backToCart,
  backToDelivery,
  showConfirm,
} = uiSlice.actions;

export default uiSlice.reducer;
