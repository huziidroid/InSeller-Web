import { IconButton } from "@mui/material";
import React from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import CartItem from "./CartItem";
import { AnimatePresence, motion } from "framer-motion";

function Cart({ showCart = false, setShowCart = () => {} }) {
  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: "35vw",
            transition: { delay: 0.1, duration: 0.5 },
          }}
          exit={{
            width: 0,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          className={`top-0 right-0 fixed bg-[#FFFFFF] w-[35vw] h-full shadow-lg z-50`}
        >
          <div className="flex justify-between items-center border-b-2 border-black p-7">
            <span className="flex items-center">
              <IconButton onClick={() => setShowCart(!showCart)}>
                <BsArrowBarLeft size={25} className="cursor-pointer" />
              </IconButton>
              <p className="text-2xl font-semibold ml-5">Cart</p>
            </span>
            <p className="text-2xl font-semibold ml-5">Clear cart</p>
          </div>
          <div className="flex flex-col justify-start items-center w-full h-[60vh] border-b-2 border-black overflow-auto no-scrollbar">
            <CartItem />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Cart;
