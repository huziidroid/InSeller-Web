import React from "react";
import ItemSlider from "../components/ItemSlider";
import { connect } from "react-redux";

function Products({ categories }) {
  return (
    <div>
      {categories.map((item, key) => {
        return (
          item.items.length > 0 && (
            <ItemSlider category={item} product={item.items} key={key} />
          )
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => ({
  categories: state.shop.categoriesProducts,
});

export default connect(mapStateToProps)(Products);
