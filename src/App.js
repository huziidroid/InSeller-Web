import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";
import Products from "./layouts/Products";
import Category from "./layouts/Category";
import Footer from "./components/Footer";
import NoRoutes from "./components/NoRoutes";
import ProductDetails from "./layouts/Product.Details";
import CategoryProducts from "./layouts/Category.Products";
import Checkout from "./layouts/Checkout";
import UserDetails from "./layouts/UserDetails";
import Address from "./layouts/Address";
import { useGetStoreByURLQuery } from "./redux/api";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setStore } from "./redux/slice/storeSlice";
import { CircularProgress } from "@mui/material";
import { ToastContainer } from "react-toastify";

function App() {
  const { data, isSuccess } = useGetStoreByURLQuery(
    window.location.pathname.split("/")[1]
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (isSuccess) {
      dispatch(setStore(data?.store));
      setLoading(false);
    }
  }, [isSuccess]);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center m-0 h-[30rem] w-full">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div>
          <div className="sticky top-0 z-50">
            <Header />
            <Slider />
          </div>
          <div>
            <Routes>
              <Route path="/:url_name" element={<Products />} />
              <Route path="/:url_name/categories" element={<Category />} />
              <Route path="/:url_name/checkout" element={<Checkout />} />
              <Route path="/:url_name/address" element={<Address />} />
              <Route
                path="/:url_name/products/:name"
                element={<ProductDetails />}
              />
              <Route
                path="/:url_name/categories/:name"
                element={<CategoryProducts />}
              />
              <Route path="/:url_name/account" element={<UserDetails />} />
              <Route path="*" element={<NoRoutes />} />
            </Routes>
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
export default App;
