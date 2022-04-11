import { Breadcrumbs } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import ItemCard from "../components/ItemCard";
import NoDisplay from "../components/NoDisplay";
import { Link } from "react-router-dom";

function CategoryProducts({ store, category }) {
  return (
    <div
      className={`flex flex-col w-full h-full justify-center px-10 py-5 bg-[#F7FBFF]`}
    >
      <span className="px-12 py-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className="hover:underline text-[#1565c0]">
            {store ? store.name : ""}
          </Link>
          <Link to="/categories" className="hover:underline text-[#1565c0]">
            categories
          </Link>
          <Link
            underline="hover"
            to={`/categories/${category.name}`}
            className="hover:underline text-[#1565c0]"
          >
            {category.name}
          </Link>
        </Breadcrumbs>
      </span>

      {category.items.length > 0 ? (
        <div
          className={`flex flex-row flex-wrap items-start justify-start px-10 w-full h-full bg-[#F7FBFF]`}
        >
          {category.items.map((item, key) => {
            return (
              <span className="my-2 mx-3" key={key}>
                <ItemCard item={item} />
              </span>
            );
          })}
        </div>
      ) : (
        <NoDisplay name="products" />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    store: state.shop.store,
    category: state.shop.category,
  };
};

export default connect(mapStateToProps)(CategoryProducts);
