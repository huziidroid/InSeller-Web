import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { InSellerApi } from "./api";
import StoreSlice from "./slice/storeSlice";
import CartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [InSellerApi.reducerPath]: InSellerApi.reducer,
    store: StoreSlice,
    cart: CartSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(InSellerApi.middleware),
});
setupListeners(store.dispatch);

export default store;
