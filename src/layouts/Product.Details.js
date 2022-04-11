import React, { useState } from "react";
import { connect } from "react-redux";
import { Breadcrumbs, Button, Card, CardMedia, Chip } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../redux/Shopping/shopping.actions";
import { useNavigate } from "react-router-dom";

function ProductDetails({ store, currentItem, addToCart, cart }) {
  const { name } = useParams();
  const [key, setKey] = useState(0);
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (activeColor !== "" && activeSize !== "") {
      setDisabled(false);
    }
  }, [activeColor, activeSize]);
  React.useEffect(() => {
    (currentItem.sizes && currentItem.sizes.length > 0) ||
    (currentItem.colors && currentItem.colors.length > 0)
      ? setDisabled(true)
      : setDisabled(false);
  }, []);
  return (
    <div
      className={`flex flex-col items-start justify-start p-10 w-full h-full bg-[#F7FBFF]`}
    >
      <p className={`text-2xl font-semibold font-poppins text-[#3A3845]`}>
        Product Details
      </p>
      <span className="my-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className={`hover:underline text-[#1565c0]`}>
            {store.name}
          </Link>
          <Link
            to={`/products/${name}`}
            className={`hover:underline text-[#1565c0]`}
          >
            {name}
          </Link>
        </Breadcrumbs>
      </span>
      <div className="flex flex-row justify-between w-full items-start px-5">
        <div className="flex flex-col justify-between items-center">
          <Card className="w-[28rem] h-[28rem]">
            <CardMedia>
              <img
                src={
                  currentItem.images
                    ? currentItem.images.length > 0
                      ? currentItem.images[key].image
                      : "/assets/default-image.png"
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
                  src={image.image}
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
        <div className="flex flex-col justify-between w-full h-[22rem] mx-10">
          <span className="flex flex-col justify-between h-40">
            <p className={`text-xl font-semibold font-poppins text-[#3A3845]`}>
              {currentItem.name}
            </p>
            <p className={`text-lg font-normal font-poppins text-[#3A3845]`}>
              {currentItem.description}
            </p>
            <p className={`text-lg font-normal font-poppins text-[#3A3845]`}>
              {`Per ${currentItem.unit}`}
            </p>
            <p className={`text-2xl font-normal font-poppins text-green-500`}>
              {`Rs. ${currentItem.selling_price}`}
            </p>
          </span>
          {currentItem.sizes && (
            <span className="my-5">
              <p className={`text-lg font-normal font-poppins text-green-500`}>
                Select Size
              </p>
              <span className="flex flex-row mt-4 w-60 overflow-auto no-scrollbar">
                {currentItem.sizes.map((size, index) => (
                  <Chip
                    key={index}
                    label={size}
                    className="px-2 mx-3"
                    variant="outlined"
                    color={activeSize === size ? "primary" : "default"}
                    onClick={() => {
                      setActiveSize(size);
                    }}
                  />
                ))}
              </span>
            </span>
          )}
          {currentItem.colors && (
            <span className="my-5">
              <p className={`text-lg font-normal font-poppins text-green-500`}>
                Select Color
              </p>
              <span className="flex flex-row mt-4 w-60 overflow-auto no-scrollbar">
                {currentItem.colors.map((color, index) => (
                  <Chip
                    key={index}
                    label={color}
                    className="px-2 mx-3"
                    variant="outlined"
                    color={activeColor === color ? "primary" : "default"}
                    onClick={() => {
                      setActiveColor(color);
                    }}
                  />
                ))}
              </span>
            </span>
          )}
          <span className="flex flex row items-center">
            <Button
              disabled={disabled}
              color="primary"
              variant="contained"
              disableElevation
              onClick={() => {
                addToCart(
                  currentItem.id,
                  currentItem.category_id,
                  activeSize,
                  activeColor
                );
                setShow(true);
                setActiveColor("");
                setActiveSize("");
              }}
            >
              Add to cart
            </Button>
            {show && cart.length > 0 && (
              <span className="mx-5">
                <Button
                  variant="contained"
                  color="success"
                  disableElevation
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to checkout
                </Button>
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    store: state.shop.store,
    currentItem: state.shop.currentItem,
    cart: state.shop.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item_id, category_id, color, size) =>
      dispatch(addToCart(item_id, category_id, color, size)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
