import { IconButton } from "@mui/material";
import { ImCancelCircle } from "react-icons/im";
import React from "react";
import CartItem from "./CartItem";
import { AnimatePresence, motion } from "framer-motion";
import CartTotal from "./CartTotal";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, clearCart } from "../../redux/slice/cartSlice";

function Cart({ showCart = false, setShowCart }) {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: "38vw",
            transition: { delay: 0.1, duration: 0.5 },
          }}
          exit={{
            width: 0,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          className={`flex flex-col justify-between items-center top-0 right-0 fixed bg-[#FFFFFF] w-[38vw] h-[100vh] shadow-lg z-50 overflow-y-auto no-scrollbar`}
        >
          <div className="flex flex-row justify-between w-full items-center border-b-2 border-black p-4">
            <span className="flex items-center">
              <IconButton onClick={() => setShowCart(!showCart)}>
                <ImCancelCircle size={18} />
              </IconButton>
              <p className="text-lg font-semibold ml-5">Cart</p>
              <span className="flex justify-center items-center px-2 py-1 border-2 rounded-md mx-5">
                <p className="font-semibold font-poppins text-gray-700 text-sm">
                  {cart.length}
                </p>
              </span>
            </span>
            <IconButton
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              <p className="text-base font-semibold">Clear cart</p>
            </IconButton>
          </div>
          <div className="flex flex-col justify-start items-center w-full h-[90vh] border-b-2 border-dashed border-black overflow-auto no-scrollbar">
            {cart.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
          </div>
          <CartTotal setShow={setShowCart} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Cart;
