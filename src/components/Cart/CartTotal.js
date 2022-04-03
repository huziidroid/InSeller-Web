import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartTotal({ cart, setShow }) {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let price = 0;
    let sub_price = 0;
    cart.forEach((item) => {
      price += item.price * item.quantity;
      sub_price += item.price * item.quantity;
    });
    setTotal(price);
    setSubTotal(sub_price);
  }, [cart, total, subTotal, setSubTotal, setTotal]);
  return (
    <div className="flex flex-col justify-between items-center w-full  bg-[#F7FBFF]">
      <span className="flex flex-row justify-between items-center p-5 w-full">
        <p className="text-xl font-semibold text-gray-500 antialiased">
          Sub Total:
        </p>
        <p className="text-xl font-semibold text-gray-900">{subTotal}</p>
      </span>
      <span className="flex flex-row justify-between items-center p-5 w-full">
        <p className="text-xl font-semibold text-gray-500 antialiased">
          Delivery Charges
        </p>
        <p className="text-xl font-semibold text-gray-900">Free</p>
      </span>
      <span className="flex flex-row justify-between items-center p-5 w-full">
        <p className="text-xl font-semibold text-gray-500 antialiased">Total</p>
        <p className="text-xl font-semibold text-gray-900">{total}</p>
      </span>
      {cart.length > 0 ? (
        <Button
          className="w-full h-20"
          color="success"
          variant="contained"
          disableElevation
          onClick={() => {
            setShow(false);
            navigate("checkout");
          }}
        >
          Procced to Checkout
        </Button>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

export default connect(mapStateToProps)(CartTotal);
