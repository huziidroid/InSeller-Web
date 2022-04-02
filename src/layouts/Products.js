import React from "react";
import ItemSlider from "../components/ItemSlider";
import { connect } from "react-redux";

function Products({ categories }) {
  return (
    <div>
      {categories.map((item, key) => {
        return (
          item.products.length > 0 && (
            <ItemSlider category={item} product={item.products} key={key} />
          )
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => ({
  categories: state.shop.categories,
});

export default connect(mapStateToProps)(Products);
