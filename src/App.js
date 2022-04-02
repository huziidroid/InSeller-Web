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
import { connect } from "react-redux";

function App({ categories }) {
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
          <Route path="products/:name" element={<ProductDetails />} />
          <Route path="categories/:name" element={<CategoryProducts />} />
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
    categories: state.shop.categories,
  };
};

export default connect(mapStateToProps)(App);
