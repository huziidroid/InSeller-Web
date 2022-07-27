import {
  Alert,
  Breadcrumbs,
  Card,
  CardContent,
  Skeleton,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import NoDisplay from "../components/NoDisplay";
import { Link, useParams } from "react-router-dom";
import { useGetCatoegryByNameQuery } from "../redux/api";
import { useSelector } from "react-redux";
import { selectStore } from "../redux/slice/storeSlice";

const ItemSkeleton = () => {
  return [...Array(10)].map((_, key) => (
    <span className="px-3 pb-10" key={key}>
      <Card className="w-52 h-auto min-h-max">
        <Skeleton variant="rect" height="11rem" />
        <CardContent className="flex flex-col justify-center items-start p-3 h-full">
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton
            variant="rect"
            width="120px"
            height="35px"
            className="mt-2"
          />
        </CardContent>
      </Card>
    </span>
  ));
};

function CategoryProducts() {
  const store = useSelector(selectStore);
  const { name } = useParams();
  const { data, isLoading, isError } = useGetCatoegryByNameQuery(name);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(isError), [isError]);
  return (
    <div
      className={`flex flex-col w-full h-full justify-center px-6 bg-[#F7FBFF]`}
    >
      <span className="px-7 py-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to={`/${store?.url_name}`}
            className="hover:underline text-[#1565c0]"
          >
            {store?.name}
          </Link>
          <Link
            to={`/${store?.url_name}/categories`}
            className="hover:underline text-[#1565c0]"
          >
            categories
          </Link>
          <Link
            underline="hover"
            to={`/${store?.url_name}/categories/${name}`}
            className="hover:underline text-[#1565c0]"
          >
            {name}
          </Link>
        </Breadcrumbs>
      </span>
      <div
        className={`flex flex-row flex-wrap items-start justify-start px-4 mx w-full h-full`}
      >
        {isLoading ? (
          <ItemSkeleton />
        ) : data.items.length > 0 ? (
          data.items.map((item, key) => {
            return (
              <span className="my-2 mx-3" key={key}>
                <ItemCard item={item} />
              </span>
            );
          })
        ) : (
          <NoDisplay name="products" />
        )}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setTimeout(() => setOpen(false), 5000)}
      >
        <Alert severity="error">
          Error Occurred in Category Products while fetching data
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CategoryProducts;
