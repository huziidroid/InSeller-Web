import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../redux/Shopping/shopping.actions";
import VariantModal from "./VariantModal";

function ItemCard({ item, loadCurrentItem, addToCart }) {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const handleModalOpen = (item) => {
    loadCurrentItem(item);
    setOpen(true);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <span className="pl-3 pr-3">
      <Card className="w-80 h-full min-h-max rounded-lg">
        <Link to={`/products/${item.name}`}>
          <CardActionArea onClick={() => loadCurrentItem(item)}>
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
                  item.images
                    ? item.images.length > 0
                      ? item.images[0]
                      : "/assets/default-image.png"
                    : "/assets/default-image.png"
                }
                alt="item"
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
                <p className="text-xl font-semibold">{item.name}</p>
              )}
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="13rem"
                  height="2rem"
                />
              ) : (
                <p className="text-gray-700 font-normal text-xl">
                  {item.description}
                </p>
              )}
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="10rem"
                  height="2rem"
                />
              ) : (
                <p className="text-gray-700 font-bold text-xl">{`Rs. ${item.price}`}</p>
              )}
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions className="py-5">
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rect"
              width="9rem"
              height="2.5rem"
            />
          ) : (
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => {
                (item.sizes && item.sizes.length > 0) ||
                (item.colors && item.colors.length > 0)
                  ? handleModalOpen(item)
                  : addToCart(item.id, item.category_id);
              }}
            >
              Add to cart
            </Button>
          )}
        </CardActions>
      </Card>
      <VariantModal open={open} setOpen={setOpen} />
    </span>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item, category_id) => dispatch(addToCart(item, category_id)),
  loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemCard);
