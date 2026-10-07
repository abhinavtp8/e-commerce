import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.quantity < 10) {
          existingItem.quantity += 1;
        }
      } else {
        state.products.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.product.id === action.payload);
      if (item && item.quantity < 10) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.product.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter((item) => item.product.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;