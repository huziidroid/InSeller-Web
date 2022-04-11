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
import { connect } from "react-redux";
import Address from "./layouts/Address";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "./api/config";
import {
  setStore,
  setCategoriesProducts,
} from "./redux/Shopping/shopping.actions";

function App({ categories, store }) {
  const dispatch = useDispatch();

  const fetchData = async (url_name) => {
    const store_response = await axios
      .get(`${BASE_URL}/api/user/store/get-store-by-url/${url_name}`)
      .catch((err) => {
        console.log(err);
      });
    const category_response = await axios
      .get(
        `${BASE_URL}/api/user/store/item/category/get-all-categories-products/${store_response.data.store.id}`
      )
      .catch((err) => {
        console.log(err);
      });
    dispatch(setCategoriesProducts(category_response.data.categories));
    dispatch(setStore(store_response.data.store));
  };

  useEffect(() => {
    const host = window.location.host;
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) {
      fetchData(arr[0]);
    }
  }, []);
  console.log(store);

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
        <Slider categories={categories} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="categories" element={<Category />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="address" element={<Address />} />
          <Route path="products/:name" element={<ProductDetails />} />
          <Route path="categories/:name" element={<CategoryProducts />} />
          <Route path="account" element={<UserDetails />} />
          <Route path="*" element={<NoRoutes />} />
        </Routes>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.shop.categoriesProducts,
    store: state.shop.store,
  };
};

export default connect(mapStateToProps)(App);
