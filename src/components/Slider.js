import React, { useEffect } from "react";
import { Chip, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../redux/api";
import { LinearProgress, Box, Snackbar, Alert } from "@mui/material";
import { selectStore } from "../redux/slice/storeSlice";
import { useSelector } from "react-redux";

function Slider() {
  const store = useSelector(selectStore);
  const [activeId, setActiveId] = React.useState(0);
  const {
    data: categories,
    isError,
    isSuccess,
    error,
  } = useGetCategoriesQuery(store?.id);
  const [open, setOpen] = React.useState(false);
  useEffect(() => setOpen(isError), [isError]);
  return (
    <div className="flex items-center py-2 pl-2 w-full border-b-2 overflow-x-auto no-scrollbar bg-white shadow-sm">
      {!isSuccess ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        categories.map((category, key) => (
          <span className="px-2" key={key}>
            <Link to={`${store?.url_name}/categories/${category.name}`}>
              <Chip
                size="small"
                key={category.id}
                avatar={<Avatar>{category.name.charAt(0)}</Avatar>}
                label={category.name}
                variant="outlined"
                color={activeId === category.id ? "primary" : "default"}
                onClick={() => {
                  setActiveId(category.id);
                }}
              />
            </Link>
          </span>
        ))
      )}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setTimeout(() => setOpen(false), 5000)}
      >
        <Alert severity="error">{error?.message}</Alert>
      </Snackbar>
    </div>
  );
}
export default Slider;
