import React from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import CartItem from "./CartItem";

function Cart(props) {
  return (
    <div
      className={`top-0 right-0 fixed bg-blue-100 w-[35vw] h-full shadow-lg transition duration-300 ease-in-out z-10`}
    >
      <div className="flex justify-between items-center border-b-2 border-black p-7">
        <span className="flex items-center">
          <BsArrowBarLeft
            onClick={() => props.setShowCart(false)}
            size={25}
            className="cursor-pointer"
          />
          <p className="text-2xl font-semibold ml-5">Cart</p>
        </span>
        <p className="text-2xl font-semibold ml-5">Clear cart</p>
      </div>
      <div className="flex flex-col justify-start items-center w-full h-[60vh] border-b-2 border-black overflow-auto no-scrollbar">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default Cart;
