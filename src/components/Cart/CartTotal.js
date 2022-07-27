import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCart,
  selectCartTotal,
  selectCartShipping,
  selectCartSubTotal,
} from "../../redux/slice/cartSlice";
import { selectStore } from "../../redux/slice/storeSlice";

const TotalChild = ({ title, value }) => (
  <span className="flex flex-row justify-between items-center p-5 w-full">
    <p className="text-sm font-semibold text-gray-500 antialiased">{title}</p>
    <p className="text-sm font-bold text-gray-900">{value}</p>
  </span>
);

function CartTotal({ setShow }) {
  const store = useSelector(selectStore);
  const cart = useSelector(selectCart);
  const total = useSelector(selectCartTotal);
  const shipping = useSelector(selectCartShipping);
  const subTotal = useSelector(selectCartSubTotal);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-center w-full bg-[#F7FBFF]">
      <TotalChild title="Subtotal" value={subTotal} />
      <TotalChild
        title="Shipping"
        value={shipping === 0 ? "Free" : `Rs. ${shipping}`}
      />
      <TotalChild title="Total" value={total} />
      {cart.length > 0 && (
        <Button
          className="w-full h-14"
          color="success"
          size="small"
          variant="contained"
          disableElevation
          onClick={() => {
            setShow(false);
            navigate(`/${store?.url_name}/checkout`);
          }}
        >
          Procced to Checkout
        </Button>
      )}
    </div>
  );
}

export default CartTotal;
