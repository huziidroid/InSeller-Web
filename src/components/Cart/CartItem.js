import React from "react";
import Incrementer from "./Incrementer";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IconButton } from "@mui/material";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/Shopping/shopping.actions";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex justify-between items-center p-5 border-b-2 border-gray-100 w-full">
      <p className="text-xl font-semibold">{item.name}</p>
      <Incrementer item={item} />
      <span className="flex flex-row justify-between items-center">
        <p className="text-xl font-semibold mx-3">{`Rs. ${
          +item.price * +item.quantity
        }`}</p>
        <IconButton
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          <RiDeleteBin6Line color="red" size={25} />
        </IconButton>
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item_id) => dispatch(removeFromCart(item_id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
