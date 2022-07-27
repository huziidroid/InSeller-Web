import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { adjustQuantity } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

function Incrementer({ item: product }) {
  const dispatch = useDispatch();
  const { item, quantity } = product;
  return (
    <div className="flex justify-between item-center w-1/6 h-6 border-2 border-green-500 rounded-full">
      <IconButton
        className="mx-2 h-full"
        onClick={() =>
          dispatch(
            adjustQuantity({
              item: item,
              quantity: quantity === 1 ? 1 : quantity - 1,
              action_value: "decrease",
            })
          )
        }
      >
        <AiOutlineMinus className="text-red-500" size={15} />
      </IconButton>
      <span className="flex justify-center items-center bg-green-300 w-8 h-full">
        <p className="text-sm font-light">{quantity}</p>
      </span>
      <IconButton
        className="mx-2 h-full"
        onClick={() =>
          dispatch(
            adjustQuantity({
              item,
              quantity: quantity + 1,
              action_value: "increase",
            })
          )
        }
      >
        <AiOutlinePlus className="text-green-500" size={15} />
      </IconButton>
    </div>
  );
}

export default Incrementer;
