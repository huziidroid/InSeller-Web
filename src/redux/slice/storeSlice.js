import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  store: {},
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStore: (state, action) => {
      state.store = action.payload;
    },
  },
});

export default storeSlice.reducer;
export const { setStore } = storeSlice.actions;
export const selectStore = (state) => state.store.store;
