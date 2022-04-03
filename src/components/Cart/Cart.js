import { Button, IconButton } from "@mui/material";
import React from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import CartItem from "./CartItem";
import { AnimatePresence, motion } from "framer-motion";
import { connect } from "react-redux";
import { clearCart } from "../../redux/Shopping/shopping.actions";
import CartTotal from "./CartTotal";

function Cart({ showCart = false, setShowCart = () => {}, clearCart, cart }) {
  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: "40vw",
            transition: { delay: 0.1, duration: 0.5 },
          }}
          exit={{
            width: 0,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          className={`flex flex-col justify-between items-center top-0 right-0 fixed bg-[#FFFFFF] w-[40vw] h-full shadow-lg z-50 overflow-y-auto no-scrollbar`}
        >
          <div className="flex flex-row justify-between w-full items-center border-b-2 border-black p-7">
            <span className="flex items-center">
              <IconButton onClick={() => setShowCart(!showCart)}>
                <BsArrowBarLeft size={25} />
              </IconButton>
              <p className="text-2xl font-semibold ml-5">Cart</p>
            </span>
            <IconButton onClick={() => clearCart()}>
              <p className="text-2xl font-semibold ml-5">Clear cart</p>
            </IconButton>
          </div>
          <div className="flex flex-col justify-start items-center w-full h-[60vh] border-b-2 border-dashed border-black overflow-auto no-scrollbar">
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <CartTotal />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
