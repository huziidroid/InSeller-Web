import { Button } from "@mui/material";
import React from "react";

function ItemCard() {
  return (
    <div className="max-w-sm h-1/2 rounded shadow-lg mx-5 my-5 hover:shadow-2xl hover:transition duration-300 ease-in-out">
      <img className="w-full" src="logo192.png" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Shampoo</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button color="secondary">Add</Button>
      </div>
    </div>
  );
}

export default ItemCard;
