import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../api/config";

export const InSellerApi = createApi({
  reducerPath: "insellerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getStoreByURL: builder.query({
      query: (url_name) => `user/store/get-store-by-url/${url_name}`,
    }),
    getAllCategoriesProducts: builder.query({
      query: (url_name) =>
        `user/store/item/category/get-category-and-products-by-url/${url_name}`,
    }),
    getCategories: builder.query({
      query: (store_id) =>
        `user/store/item/category/get-all-categories/${store_id}`,
    }),
    getCatoegryByName: builder.query({
      query: (name) => `user/store/item/category/get-cateogory-by-name/${name}`,
    }),
    getItemByName: builder.query({
      query: (name) => `user/store/item/get-item-by-name/${name}`,
    }),
    placeOrder: builder.mutation({
      query: (body) => ({
        url: `user/store/orders/place-order/`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetStoreByURLQuery,
  useGetAllCategoriesProductsQuery,
  useGetCategoriesQuery,
  useGetCatoegryByNameQuery,
  useGetItemByNameQuery,
  usePlaceOrderMutation,
} = InSellerApi;
