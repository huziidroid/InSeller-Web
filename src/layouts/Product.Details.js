import React, { useEffect, useState } from "react";

import {
  Alert,
  Breadcrumbs,
  Button,
  Card,
  CardMedia,
  Skeleton,
  Snackbar,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGetItemByNameQuery } from "../redux/api";
import { selectStore } from "../redux/slice/storeSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCart } from "../redux/slice/cartSlice";

function ProductDetails() {
  const { name } = useParams();
  const store = useSelector(selectStore);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const { data, isLoading, isError } = useGetItemByNameQuery(name);
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => setOpen(isError), [isError]);

  return (
    <div
      className={`flex flex-col items-start justify-start p-10 w-full h-full bg-[#F7FBFF]`}
    >
      <p className={`text-xl font-semibold font-poppins text-[#3A3845]`}>
        Product Details
      </p>
      <span className="mt-2 mb-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to={`/${store?.url_name}`}
            className={`hover:underline text-[#1565c0] text-sm`}
          >
            {store?.name}
          </Link>
          <Link
            to={`/${store?.url_name}/products/${name}`}
            className={`hover:underline text-[#1565c0] text-sm`}
          >
            {name}
          </Link>
        </Breadcrumbs>
      </span>

      <div className="flex flex-row justify-between w-full items-start">
        <div className="flex flex-col justify-between items-center">
          {isLoading ? (
            <Skeleton
              variant="rect"
              width="20rem"
              height="20rem"
              className="rounded-lg shadow-md"
            />
          ) : (
            <Card className="w-[20rem] h-[20rem]">
              <CardMedia>
                <img
                  src={
                    data?.image?.length > 0
                      ? data.image
                      : "/assets/default-image.png"
                  }
                  alt="product"
                  className="w-[20rem] h-[20rem] p-5 object-cover"
                />
              </CardMedia>
            </Card>
          )}
          <span className="flex flex-row w-[20rem] p-4 m-3 overflow-auto no-scrollbar">
            {isLoading ? (
              <Skeleton
                variant="rect"
                height="3.5rem"
                width="3.5rem"
                className="p-1 mx-4 shadow-sm"
              />
            ) : (
              <img
                src={
                  data?.image?.length > 0
                    ? data.image
                    : "/assets/default-image.png"
                }
                alt="product"
                className="w-14 h-14 p-1 mx-4 border-2 border-gray-100 shadow-sm rounded-sm hover:shadow-md"
              />
            )}
          </span>
        </div>
        <div className="flex flex-col justify-between w-full h-[20rem] mx-10">
          <span className="flex flex-col justify-between h-40">
            {isLoading ? (
              <>
                <Skeleton variant="text" width={150} />
                <Skeleton variant="text" width={200} />
                <Skeleton variant="text" width={150} />
                <Skeleton variant="text" width={150} />
              </>
            ) : (
              <>
                <p
                  className={`text-2xl font-semibold font-poppins text-[#3A3845]`}
                >
                  {name}
                </p>
                <p
                  className={`text-md font-normal font-poppins text-[#3A3845] mt-2`}
                >
                  {data?.description}
                </p>
                <p
                  className={`text-lg font-semibold font-poppins text-[#3A3845] mt-2`}
                >
                  {data?.unit}
                </p>
                <p
                  className={`${
                    parseInt(data?.discount_price) > 0
                      ? "text-lg line-through"
                      : "text-2xl no-underline"
                  } font-normal font-poppins text-green-500 mt-2 `}
                >
                  {`Rs. ${data?.selling_price}`}
                </p>
                {parseInt(data?.discount_price) > 0 && (
                  <p
                    className={`text-2xl font-normal font-poppins text-green-500 mt-2`}
                  >
                    {`Rs. ${data?.discount_price}`}
                  </p>
                )}
              </>
            )}

            <span className="flex flex row items-center mt-6 mb-10">
              <Button
                disabled={isLoading}
                color="primary"
                variant="contained"
                disableElevation
                size="small"
                onClick={() => {
                  dispatch(addToCart({ item: data, quantity: 1 }));
                  setShow(true);
                }}
              >
                Add to cart
              </Button>
              {show && cart.length > 0 && (
                <span className="mx-5">
                  <Button
                    variant="contained"
                    color="success"
                    disableElevation
                    size="small"
                    onClick={() => navigate(`/${store?.url_name}/checkout`)}
                  >
                    Proceed to checkout
                  </Button>
                </span>
              )}
            </span>
          </span>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setTimeout(() => setOpen(false), 5000)}
      >
        <Alert severity="error">
          Error Occurred while fetching data from database in order details
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductDetails;
