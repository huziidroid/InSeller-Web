import React, { useEffect } from "react";
import ItemSlider from "../components/ItemSlider";
import { useGetAllCategoriesProductsQuery } from "../redux/api";
import { Alert, Snackbar, Skeleton, CardContent, Card } from "@mui/material";
import { selectStore } from "../redux/slice/storeSlice";
import { useSelector } from "react-redux";

const ItemSliderSkeleton = () => {
  return [...Array(3)].map((_, key) => (
    <div
      key={key}
      className={`flex flex-col w-full h-full justify-center px-12 py-2 bg-[#F7FBFF]`}
    >
      <div className="flex flex-row justify-between items-center px-6">
        <Skeleton variant="text" width="10%" />
      </div>
      <div className="flex flex-nowrap w-3/2 items-center p-3 overflow-x-auto no-scrollbar">
        {[...Array(10)].map((_, key) => (
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
        ))}
      </div>
    </div>
  ));
};

function Products() {
  const store = useSelector(selectStore);
  const { data, isError, isSuccess } = useGetAllCategoriesProductsQuery(
    store?.url_name ?? ""
  );
  const [open, setOpen] = React.useState(false);
  useEffect(() => setOpen(isError), [isError]);

  return (
    <>
      {isSuccess ? (
        data.length > 0 &&
        data.map((item, key) => {
          return (
            item.items.length > 0 && (
              <ItemSlider category={item} product={item.items} key={key} />
            )
          );
        })
      ) : (
        <ItemSliderSkeleton />
      )}

      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setTimeout(() => setOpen(false), 5000)}
      >
        <Alert severity="error">
          Something went wrong in Product Home page. Please try again later.
        </Alert>
      </Snackbar>
    </>
  );
}
export default Products;
