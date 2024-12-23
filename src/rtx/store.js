import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/Product-slice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
