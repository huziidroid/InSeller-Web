import { Breadcrumbs, Link } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import ItemCard from "../components/ItemCard";
import NoDisplay from "../components/NoDisplay";
import { Colors } from "../constants/Colors";

function CategoryProducts({ shopName, category }) {
  return (
    <div
      className={`flex flex-col w-full h-full justify-center px-10 py-5 bg-[${Colors.primary}]`}
    >
      <span className="px-12 py-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="/">
            {shopName}
          </Link>
          <Link underline="hover" href="/categories">
            categories
          </Link>
          <Link underline="hover" className="cursor-pointer">
            {category.name}
          </Link>
        </Breadcrumbs>
      </span>

      {category.products.length > 0 ? (
        <div
          className={`flex flex-row flex-wrap items-start justify-start px-10 w-full h-full bg-[${Colors.primary}]`}
        >
          {category.products.map((item, key) => {
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
    shopName: state.shop.shopName,
    category: state.shop.category,
  };
};

export default connect(mapStateToProps)(CategoryProducts);
