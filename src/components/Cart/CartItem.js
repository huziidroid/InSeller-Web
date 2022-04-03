import React from "react";
import Incrementer from "./Incrementer";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Chip, IconButton } from "@mui/material";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/Shopping/shopping.actions";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex justify-between items-center p-5 border-b-2 border-gray-100 w-full">
      <span className="flex flex-col">
        <p className="text-xl font-semibold">{item.name}</p>
        <span className="flex flex-row justify-between items-center w-32 my-2">
          {item.color && item.color !== "" ? (
            <Chip label={item.color} color="secondary" variant="outlined" />
          ) : null}

          {item.size && item.size !== "" ? (
            <Chip label={item.size} color="primary" variant="outlined" />
          ) : null}
        </span>
      </span>

      <Incrementer item={item} />
      <span className="flex flex-row justify-between items-center">
        <p className="text-xl font-semibold mx-3">{`Rs. ${
          +item.price * +item.quantity
        }`}</p>
        <IconButton
          onClick={() => {
            removeFromCart(item.id, item.category_id);
          }}
        >
          <RiDeleteBin6Line color="red" size={25} />
        </IconButton>
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item_id, category_id) =>
    dispatch(removeFromCart(item_id, category_id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
