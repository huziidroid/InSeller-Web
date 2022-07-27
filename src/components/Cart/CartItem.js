import React from "react";
import Incrementer from "./Incrementer";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slice/cartSlice";

function CartItem({ item: product }) {
  const dispatch = useDispatch();
  const { item, quantity } = product;
  return (
    <div className="flex justify-between items-center p-3 border-b-2 border-gray-100 w-full">
      <p className="text-sm font-semibold">{item?.name}</p>
      <Incrementer item={product} />
      <span className="flex flex-row justify-between items-center">
        <p className="text-sm font-bold mx-3">{`Rs. ${
          +item?.selling_price * +quantity
        }`}</p>
        <IconButton onClick={() => dispatch(removeFromCart({ item }))}>
          <RiDeleteBin6Line color="red" size={18} />
        </IconButton>
      </span>
    </div>
  );
}

export default CartItem;
