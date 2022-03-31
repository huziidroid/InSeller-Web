import React from "react";
import { Chip, Avatar } from "@mui/material";

const categories = [
  {
    name: "Fiction",
  },
  {
    name: "Non-Fiction",
  },
  {
    name: "Children",
  },
  {
    name: "Cooking",
  },
  {
    name: "History",
  },
  {
    name: "Science",
  },
  {
    name: "Art",
  },
  {
    name: "Literature",
  },
  {
    name: "Business",
  },
  {
    name: "Comics",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
  {
    name: "Biography",
  },
];

function Slider() {
  return (
    <div className="flex items-center p-5 w-full border-b-2 overflow-x-auto no-scrollbar">
      {categories.map((category, key) => (
        <span className="pl-3 pr-3">
          <Chip
            clickable
            avatar={<Avatar>{category.name.charAt(0)}</Avatar>}
            key={key}
            label={category.name}
            variant="outlined"
          />
        </span>
      ))}
    </div>
  );
}

export default Slider;
