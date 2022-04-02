import React from "react";
import ItemCard from "./ItemCard";
import { Colors } from "../constants/Colors";

function ItemSlider({ category, product }) {
  return (
    <div
      className={`flex flex-col w-full h-full justify-center px-10 py-5 bg-[${Colors.primary}]`}
    >
      <div className="flex flex-row justify-between items-center px-10">
        <p className="text-2xl font-semibold font-poppins">{category.name}</p>
      </div>
      <div className="flex flex-nowrap w-3/2 items-center p-5 overflow-x-auto no-scrollbar">
        {product.map((item, key) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ItemSlider;
