import React, { useState } from "react";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart/Cart";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectStore } from "../redux/slice/storeSlice";
import { selectCart } from "../redux/slice/cartSlice";

function Header() {
  const cart = useSelector(selectCart);
  const store = useSelector(selectStore);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    //   header__container
    <header className="flex justify-between items-center p-2 w-full border-b-2 bg-[#FFFFFF]">
      {/* header__container__shopname */}
      <motion.div
        animate={{
          opacity: 1,
        }}
      >
        <Cart showCart={showCart} setShowCart={setShowCart} />
      </motion.div>
      <Link to={`/${store?.url_name}`}>
        <div className="flex justify-center items-center mr-24">
          <img className="w-8 h-8" src="/logo192.png" alt="business" />
          <p className="text-lg font-semibold ml-4">{store?.name}</p>
        </div>
      </Link>
      {/* header__container__search */}
      <div className="flex flex-row items-center justify-center ml-6 mr-6 w-1/3 min-w-max">
        <input
          type="text"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-tl-md rounded-bl-md py-1 px-4 block w-full h-8 text- font-normal leading-tight appearance-none"
          placeholder="Search for items"
        />
        <button className="bg-gray-200 hover:bg-gray-300 text-white font-semibold py-2 px-4 rounded-tr-md rounded-br-md h-8 w-15 flex justify-center items-center">
          <BsSearch size={20} />
        </button>
      </div>
      {/* header__container__icons */}
      <div className="flex flex-row justify-end items-center ml-6 mr-5">
        <div
          className="flex flex-row justify-center items-center mr-7 pt-2 pl-2 pr-3 pb-2 rounded-full hover:bg-gray-300 cursor-pointer"
          onClick={() => navigate(`/${store?.url_name}/categories`)}
        >
          <BiCategoryAlt size={18} />
          <p className="text-gray-700 font-semibold text-md ml-2">Categories</p>
        </div>
        <div
          className="flex flex-row justify-center items-center mr-7 pt-2 pl-2 pr-3 pb-2 rounded-full hover:bg-gray-300 cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <Badge color="secondary" badgeContent={cart.length}>
            <AiOutlineShoppingCart size={18} />
          </Badge>
          <p className="text-gray-700 font-semibold text-md ml-2">Cart</p>
        </div>
        {/* <div className="flex flex-row justify-center items-center mr-7 rounded-full hover:bg-gray-300 cursor-pointer">
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <BsFillPersonFill size={19} />
            <p className="text-gray-700 font-semibold text-base ml-2">
              Account
            </p>
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
                navigate(`/${store?.url_name}/account`);
              }}
            >
              Profile
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Contact Us</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
          </Menu>
        </div> */}
      </div>
    </header>
  );
}
export default Header;
