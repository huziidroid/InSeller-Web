import React, { useEffect } from "react";
import NoDisplay from "../components/NoDisplay";
import CategoryCard from "../components/CategoryCard";
import {
  Alert,
  Breadcrumbs,
  Snackbar,
  Skeleton,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../redux/api";
import { selectStore } from "../redux/slice/storeSlice";
import { useSelector } from "react-redux";

const CategorySkeleton = () => {
  return [...Array(10)].map((_, key) => (
    <span className="px-3 pb-10">
      <Card className="w-52 h-auto min-h-max rounded-lg">
        <Skeleton variant="rect" height="14rem" />
        <CardContent className="flex flex-col justify-center items-start p-3 h-full">
          <Skeleton variant="text" width="100%" height="1rem" />
        </CardContent>
      </Card>
    </span>
  ));
};

function Category() {
  const store = useSelector(selectStore);
  const {
    data: categories,
    isError,
    isSuccess,
  } = useGetCategoriesQuery(store?.id);
  const [open, setOpen] = React.useState(false);

  useEffect(() => setOpen(isError), [isError]);

  return (
    <div
      className={`flex flex-col w-full h-full justify-center px-6 bg-[#F7FBFF]`}
    >
      <span className="px-7 py-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to={`/${store?.url_name}`}
            className={`hover:underline text-[#1565c0] text-sm`}
          >
            {store?.name}
          </Link>
          <Link
            to={`/${store?.url_name}/categories`}
            className={`hover:underline text-[#1565c0] text-sm`}
          >
            categories
          </Link>
        </Breadcrumbs>
      </span>
      <div
        className={`flex flex-row flex-wrap items-start justify-start px-4 w-full h-full`}
      >
        {isSuccess ? (
          categories?.length > 0 ? (
            categories.map((category, key) => {
              return <CategoryCard category={category} key={key} />;
            })
          ) : (
            <NoDisplay name="categories" />
          )
        ) : (
          <CategorySkeleton />
        )}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setTimeout(() => setOpen(false), 5000)}
      >
        <Alert severity="error">
          Something went wrong in Categories Page. Please try again later.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Category;
