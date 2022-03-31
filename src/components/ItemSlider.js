import React from "react";
import CategoryRow from "./CategoryRow";
import ItemCard from "./ItemCard";

function ItemSlider() {
  return (
    <div className="flex flex-col justify-center p-10">
      <CategoryRow />
      <div className="w-full flex flex-row items-center overflow-x-auto">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default ItemSlider;
