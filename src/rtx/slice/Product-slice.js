import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.count += 1;
      } else {
        const ProductClone = { ...action.payload, count: 1 };
        state.push(ProductClone);
      }
    },

    removeFromCart: (state, action) => {
      //   state.pop(action.payload);
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearAll: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearAll } = CartSlice.actions;

export default CartSlice.reducer;
