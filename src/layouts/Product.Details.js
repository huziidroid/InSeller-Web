import React, { useState } from "react";
import { connect } from "react-redux";
import { Breadcrumbs, Button, Card, CardMedia, Chip } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import NoDisplay from "../components/NoDisplay";

function ProductDetails({ shopName, currentItem }) {
  const { name } = useParams();
  const [key, setKey] = useState(0);

  return (
    <div
      className={`flex flex-col items-start justify-start p-10 w-full h-full bg-[#F7FBFF]`}
    >
      {currentItem && name === currentItem.name ? (
        <>
          <p className={`text-2xl font-semibold font-poppins text-[#3A3845]`}>
            Product Details
          </p>
          <span className="my-5">
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/" className={`hover:underline text-[#1565c0]`}>
                {shopName}
              </Link>
              <Link
                to={`/products/${name}`}
                className={`hover:underline text-[#1565c0]`}
              >
                {name}
              </Link>
            </Breadcrumbs>
          </span>
          <div className="flex flex-row justify-between items-start px-5">
            <div className="flex flex-col justify-between items-center">
              <Card className="w-[28rem] h-[28rem]">
                <CardMedia>
                  <img
                    src={
                      currentItem.images
                        ? currentItem.images[key]
                        : "/assets/default-image.png"
                    }
                    alt="product"
                    className="w-[28rem] h-[28rem] p-5 rounded-xl"
                  />
                </CardMedia>
              </Card>
              <span className="flex flex-row w-[26rem] p-4 m-3 overflow-auto no-scrollbar">
                {currentItem.images ? (
                  currentItem.images.map((image, index) => (
                    <img
                      src={image}
                      key={index}
                      onClick={() => setKey(index)}
                      alt="product"
                      className="w-16 h-16 p-1 mx-4 border-2 border-gray-100 shadow-sm rounded-sm hover:shadow-md"
                    />
                  ))
                ) : (
                  <img
                    src="/assets/default-image.png"
                    alt="product"
                    className="w-16 h-16 p-1 mx-4 border-2 border-gray-100 shadow-sm rounded-sm hover:shadow-md"
                  />
                )}
              </span>
            </div>
            <div className="flex flex-col justify-between w-full h-[22rem] mx-10 ">
              <span className="flex flex-col justify-between h-40">
                <p
                  className={`text-xl font-semibold font-poppins text-[#3A3845]`}
                >
                  {currentItem.name}
                </p>
                <p
                  className={`text-lg font-normal font-poppins text-[#3A3845]`}
                >
                  {currentItem.description}
                </p>
                <p
                  className={`text-lg font-normal font-poppins text-[#3A3845]`}
                >
                  {currentItem.pair}
                </p>
                <p
                  className={`text-2xl font-normal font-poppins text-green-500`}
                >
                  {currentItem.price}
                </p>
              </span>
              {currentItem.sizes && (
                <span>
                  <p
                    className={`text-lg font-normal font-poppins text-green-500`}
                  >
                    Select Size
                  </p>
                  <span className="flex flex-row mt-5 w-60 overflow-auto no-scrollbar">
                    {currentItem.sizes.map((size, index) => (
                      <Chip
                        key={index}
                        label={size}
                        className="px-2 mx-3"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </span>
                </span>
              )}
              {currentItem.colors && (
                <span>
                  <p
                    className={`text-lg font-normal font-poppins text-green-500`}
                  >
                    Select Color
                  </p>
                  <span className="flex flex-row mt-5 w-60 overflow-auto no-scrollbar">
                    <span className="border-2 p-3 mx-3 bg-blue-200">✔</span>
                    <span className="border-2 p-3 mx-3 bg-blue-200">✔</span>
                    <span className="border-2 p-3 mx-3 bg-blue-200">✔</span>
                    <span className="border-2 p-3 mx-3 bg-blue-200">✔</span>
                    <span className="border-2 p-3 mx-3 bg-blue-200">✔</span>
                  </span>
                </span>
              )}
              <span>
                <Button color="primary" variant="contained" disableElevation>
                  Add to cart
                </Button>
              </span>
            </div>
          </div>
        </>
      ) : (
        <NoDisplay name="product" />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shopName: state.shop.shopName,
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(ProductDetails);
