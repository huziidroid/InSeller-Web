import React, { useState } from "react";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart/Cart";
import { connect } from "react-redux";
import { motion } from "framer-motion";

function Header({ store, cart }) {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    //   header__container
    <header className="flex justify-between items-center p-3 w-full border-b-2 bg-[#FFFFFF]">
      {/* header__container__shopname */}
      <motion.div
        animate={{
          opacity: 1,
        }}
      >
        <Cart showCart={showCart} setShowCart={setShowCart} />
      </motion.div>
      <a href="/">
        <div className="flex justify-center items-center ml-5">
          <img className="w-12 h-12" src="/logo192.png" alt="business" />
          <p className="text-lg font-semibold ml-4">
            {store ? store.name : ""}
          </p>
        </div>
      </a>
      {/* header__container__search */}
      <div className="flex flex-row items-center justify-center ml-6 mr-6 w-1/3 min-w-max">
        <input
          type="text"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-tl-md rounded-bl-md py-2 px-4 block w-full h-10 text-mg font-normal leading-tight appearance-none"
          placeholder="Search for items"
        />
        <button className="bg-gray-200 hover:bg-gray-300 text-white font-semibold py-2 px-4 rounded-tr-md rounded-br-md h-10 w-24 flex justify-center items-center">
          <BsSearch size={20} />
        </button>
      </div>
      {/* header__container__icons */}
      <div className="flex flex-row justify-end items-center ml-6 mr-10">
        <div
          className="flex flex-row justify-center items-center mr-7 pt-2 pl-3 pr-3 pb-2 rounded-full hover:bg-gray-300 cursor-pointer"
          onClick={() => navigate("/categories")}
        >
          <BiCategoryAlt size={20} />
          <p className="text-gray-700 font-semibold text-lg ml-2">Categories</p>
        </div>
        <div
          className="flex flex-row justify-center items-center mr-7 pt-2 pl-3 pr-3 pb-2 rounded-full hover:bg-gray-300 cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <Badge color="secondary" badgeContent={cartCount}>
            <AiOutlineShoppingCart size={20} />
          </Badge>
          <p className="text-gray-700 font-semibold text-lg ml-2">Cart</p>
        </div>
        <div className="flex flex-row justify-center items-center mr-7 rounded-full hover:bg-gray-300 cursor-pointer">
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <BsFillPersonFill size={20} />
            <p className="text-gray-700 font-semibold text-lg ml-2">Account</p>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                navigate("/account");
              }}
            >
              Profile
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Contact Us</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  store: state.shop.store,
  cart: state.shop.cart,
});

export default connect(mapStateToProps)(Header);
