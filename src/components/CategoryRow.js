import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function CategoryRow() {
  return (
    <div className="flex flex-row justify-between items-center p-5">
      <p className="text-2xl font-bold">Garments</p>
      <span className="flex justify-center items-center cursor-pointer">
        <p className="text-lg font-semibold">View All</p>
        <AiOutlineArrowRight />
      </span>
    </div>
  );
}

export default CategoryRow;
