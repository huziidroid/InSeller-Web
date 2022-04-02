import React from "react";
import NoDisplay from "../components/NoDisplay";
import { connect } from "react-redux";
import CategoryCard from "../components/CategoryCard";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

function Category({ categories, shopName }) {
  return (
    <div
      className={`flex flex-col w-full h-full justify-center px-10 py-5 bg-[#F7FBFF]`}
    >
      <span className="px-12 py-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className={`hover:underline text-[#1565c0]`}>
            {shopName}
          </Link>
          <Link to="/categories" className={`hover:underline text-[#1565c0]`}>
            categories
          </Link>
        </Breadcrumbs>
      </span>

      {categories.length > 0 ? (
        <div
          className={`flex flex-row flex-wrap items-start justify-start px-10 w-full h-full bg-[#F7FBFF]`}
        >
          {categories.map((category, key) => {
            return <CategoryCard category={category} key={key} />;
          })}
        </div>
      ) : (
        <NoDisplay name="categories" />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.shop.categories,
  shopName: state.shop.shopName,
});

export default connect(mapStateToProps)(Category);
