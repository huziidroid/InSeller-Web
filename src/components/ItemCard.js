import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectStore } from "../redux/slice/storeSlice";
import { addToCart } from "../redux/slice/cartSlice";

function ItemCard({ item }) {
  const store = useSelector(selectStore);
  const dispatch = useDispatch();
  return (
    <span>
      <Card className="flex flex-col justify-between w-52 h-aut0 min-h-max mx-3">
        <Link to={`/${store?.url_name}/products/${item.name}`}>
          <CardActionArea onClick={() => {}}>
            <CardMedia
              component="img"
              className="h-40 object-contain mr-3"
              image={item.image ? item.image : "/assets/default-image.png"}
              alt="item"
            />
            <CardContent className="flex flex-col justify-center items-start p-3 h-full">
              <p className="text-md font-semibold">
                {item.name.slice(0, 20) + "..."}
              </p>
              <p className="text-gray-700 font-normal text-sm">
                {item.description.slice(0, 20) + "..."}
              </p>
              <p className="text-gray-700 font-bold text-lg">{`Rs. ${item.selling_price}`}</p>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button
            onClick={() => dispatch(addToCart({ item, quantity: 1 }))}
            variant="outlined"
            color="success"
            disableElevation
            size="small"
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </span>
  );
}

export default ItemCard;
