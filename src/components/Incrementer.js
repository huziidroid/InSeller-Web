import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
function Incrementer() {
  return (
    <div className="flex justify-between item-center w-1/5 h-8 border-2 border-green-500 rounded-full">
      <span className="mx-2 cursor-pointer">
        <AiOutlineMinus className="text-green-500" size={25} />
      </span>
      <span className="flex justify-center items-center bg-green-300 w-5 h-7">
        <p className="text-md font-normal">1</p>
      </span>
      <span className="mx-2 cursor-pointer">
        <AiOutlinePlus className="text-green-500" size={25} />
      </span>
    </div>
  );
}

export default Incrementer;
