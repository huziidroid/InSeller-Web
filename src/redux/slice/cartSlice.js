import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  subTotal: 0,
  shipping: 0,
  address: {
    name: "",
    mobile: "",
    city: "",
    address: "",
    notes: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const cartItem = state.cart.find(
        (cartItem) => cartItem.item.id === item.id
      );
      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        state.cart.push({ item, quantity });
      }
      state.subTotal += +item.selling_price * +quantity;
      state.total = state.subTotal + state.shipping;
    },
    removeFromCart: (state, action) => {
      const { item } = action.payload;
      const cartItem = state.cart.find(
        (cartItem) => cartItem.item.id === item.id
      );
      if (cartItem) {
        state.cart.splice(state.cart.indexOf(cartItem), 1);
      }
      state.subTotal -= +item.selling_price * +cartItem.quantity;
      state.total = state.subTotal + state.shipping;
    },
    adjustQuantity: (state, action) => {
      const { item, quantity, action_value } = action.payload;
      const cartItem = state.cart.find(
        (cartItem) => cartItem.item.id === item.id
      );
      if (cartItem) {
        cartItem.quantity = quantity;
      }
      if (action_value === "increase") {
        state.subTotal += +item.selling_price;
      }
      if (action_value === "decrease") {
        state.subTotal -= +item.selling_price;
      }
      state.total = state.subTotal + state.shipping;
    },
    clearCart: (state) => {
      state.cart = [];
      state.subTotal = 0;
      state.total = 0;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    deleteAddress: (state) => {
      state.address = {
        name: "",
        mobile: "",
        city: "",
        address: "",
        notes: "",
      };
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  clearCart,
  removeFromCart,
  adjustQuantity,
  setAddress,
  deleteAddress,
} = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartSubTotal = (state) => state.cart.subTotal;
export const selectCartShipping = (state) => state.cart.shipping;
export const selectAddress = (state) => state.cart.address;
