import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category, getCategory }) {
  return (
    <span className="px-3 pb-10">
      <Card className="w-52 h-auto min-h-max rounded-lg">
        <Link to={`${category.name}`}>
          <CardActionArea onClick={() => getCategory(category)}>
            <CardMedia
              component="img"
              className="h-56"
              image={
                category.image ? category.image : "/assets/default-image.png"
              }
              alt="category"
            />
            <CardContent className="flex flex-col justify-center items-start p-3 h-full">
              <p className="text-lg font-semibold">{category.name}</p>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </span>
  );
}

export default CategoryCard;
