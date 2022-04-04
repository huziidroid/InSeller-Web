import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { connect } from "react-redux";
import { adjustQuantity } from "../../redux/Shopping/shopping.actions";
function Incrementer({ item, adjustQuantity }) {
  return (
    <div className="flex justify-between item-center w-1/4 h-10 border-2 border-green-500 rounded-full">
      <IconButton
        className="mx-2 h-full"
        onClick={() => {
          adjustQuantity(
            item.id,
            item.category_id,
            item.quantity === 1 ? 1 : item.quantity - 1
          );
        }}
      >
        <AiOutlineMinus className="text-red-500" size={25} />
      </IconButton>
      <span className="flex justify-center items-center bg-green-300 w-8 h-full">
        <p>{item.quantity}</p>
      </span>
      <IconButton
        className="mx-2 h-full"
        onClick={() => {
          adjustQuantity(item.id, item.category_id, item.quantity + 1);
        }}
      >
        <AiOutlinePlus className="text-green-500" size={25} />
      </IconButton>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  adjustQuantity: (item_id, category_id, quantity) =>
    dispatch(adjustQuantity(item_id, category_id, quantity)),
});

export default connect(null, mapDispatchToProps)(Incrementer);
