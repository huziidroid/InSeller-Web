import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
} from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getCategory } from "../redux/Shopping/shopping.actions";
import { Link } from "react-router-dom";

function CategoryCard({ category, getCategory }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <span className="px-3 py-6">
      <Card className="w-80 h-full min-h-max rounded-lg">
        <Link to={`/categories/${category.name}`}>
          <CardActionArea onClick={() => getCategory(category)}>
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rect"
                width="20rem"
                height="18rem"
              />
            ) : (
              <CardMedia
                component="img"
                className="w-80 h-72"
                image={
                  category.image ? category.image : "/assets/default-image.png"
                }
                alt="category"
              />
            )}
            <CardContent className="flex flex-col justify-center items-start p-3 h-full">
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="10rem"
                  height="2rem"
                />
              ) : (
                <p className="text-xl font-semibold">{category.name}</p>
              )}
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </span>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getCategory: (category) => dispatch(getCategory(category)),
});

export default connect(null, mapDispatchToProps)(CategoryCard);
