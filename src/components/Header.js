import React, { useState } from "react";
import { Badge } from "@mui/material";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { connect } from "react-redux";
import { motion } from "framer-motion";

function Header({ shopName }) {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
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
          <img className="w-14 h-14" src="/logo192.png" alt="business" />
          <p className="text-2xl font-semibold ml-4">{shopName}</p>
        </div>
      </a>
      {/* header__container__search */}
      <div className="flex flex-row items-center justify-center ml-6 mr-6 w-1/3 min-w-max">
        <input
          type="text"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-tl-md rounded-bl-md py-2 px-4 block w-full h-12 text-lg font-normal leading-tight appearance-none"
          placeholder="Search for items"
        />
        <button className="bg-gray-200 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-tr-md rounded-br-md h-12 w-24 flex justify-center items-center">
          <BsSearch size={25} />
        </button>
      </div>
      {/* header__container__icons */}
      <div className="flex flex-row justify-end items-center ml-6 mr-10">
        <div
          className="flex flex-row justify-center items-center mr-7 pt-2 pl-3 pr-3 pb-2 rounded-full hover:bg-gray-300 cursor-pointer"
          onClick={() => navigate("categories")}
        >
          <BiCategoryAlt size={25} />
          <p className="text-gray-700 font-bold text-xl ml-2">Categories</p>
        </div>
        <div
          className="flex flex-row justify-center items-center mr-7 pt-2 pl-3 pr-3 pb-2 rounded-full hover:bg-gray-300 cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <Badge color="secondary" badgeContent={4}>
            <AiOutlineShoppingCart size={25} />
          </Badge>
          <p className="text-gray-700 font-bold text-xl ml-2">Cart</p>
        </div>
        <div className="flex flex-row justify-center items-center mr-7 pt-2 pl-3 pr-3 pb-2 rounded-full hover:bg-gray-300 cursor-pointer">
          {/* <Avatar /> */}
          <BsFillPersonFill size={25} />
          <p className="text-gray-700 font-bold text-xl ml-2">Account</p>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  shopName: state.shop.shopName,
});

export default connect(mapStateToProps)(Header);
