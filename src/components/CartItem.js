import React from "react";
import Incrementer from "./Incrementer";

function CartItem() {
  return (
    <div className="flex justify-between items-center p-5 border-b-2 border-gray-100 w-full">
      <p className="text-xl font-semibold">Shampoo</p>
      <Incrementer />
      <p className="text-xl font-semibold">Rs.50</p>
    </div>
  );
}

export default CartItem;
