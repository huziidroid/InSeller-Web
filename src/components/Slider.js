import React from "react";
import { Chip, Avatar } from "@mui/material";
import { connect } from "react-redux";
import { getCategory } from "../redux/Shopping/shopping.actions";
import { Link } from "react-router-dom";

function Slider({ categories, getCategory }) {
  const [activeId, setActiveId] = React.useState(0);
  return (
    <div className="flex items-center p-5 w-full border-b-2 overflow-x-auto no-scrollbar bg-white shadow-sm">
      {categories.map((category, key) => (
        <span className="pl-3 pr-3" key={category.id}>
          <Link to={`categories/${category.name}`}>
            <Chip
              key={category.id}
              avatar={<Avatar>{category.name.charAt(0)}</Avatar>}
              label={category.name}
              variant="outlined"
              color={activeId === category.id ? "primary" : "default"}
              onClick={() => {
                setActiveId(category.id);
                getCategory(category);
              }}
            />
          </Link>
        </span>
      ))}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getCategory: (category) => dispatch(getCategory(category)),
});

export default connect(null, mapDispatchToProps)(Slider);
