import React from "react";
import ItemCard from "./ItemCard";

function ItemSlider({ category, product }) {
  return (
    <div
      className={`flex flex-col w-full h-full justify-center px-12 py-2 bg-[#F7FBFF]`}
    >
      <div className="flex flex-row justify-between items-center px-4">
        <p className="text-xl font-semibold font-poppins">{category.name}</p>
      </div>
      <div className="flex flex-nowrap w-3/2 items-center p-3 overflow-x-auto no-scrollbar">
        {product.map((item, key) => {
          if (item.status) {
            return <ItemCard item={item} key={key} />;
          }
        })}
      </div>
    </div>
  );
}

export default ItemSlider;
