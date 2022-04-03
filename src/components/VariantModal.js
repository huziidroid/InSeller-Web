import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping.actions";
import { Chip } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function VariantModal({ open, setOpen, currentItem, addToCart }) {
  const [disable, setDisable] = React.useState(true);
  const [activeColor, setActiveColor] = React.useState("");
  const [activeSize, setActiveSize] = React.useState("");

  React.useEffect(() => {
    if (activeColor !== "" && activeSize !== "") {
      setDisable(false);
    }
  }, [activeColor, activeSize]);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Select variant"}</DialogTitle>
      <DialogContent className="w-[35vw]">
        {currentItem.sizes && (
          <span className="my-5 w-full">
            <p className={`text-lg font-normal font-poppins text-green-500`}>
              Select Size
            </p>
            <span className="flex flex-row m-4 w-full">
              {currentItem.sizes.map((size, index) => (
                <Chip
                  key={index}
                  label={size}
                  className="px-2 mx-3"
                  variant="outlined"
                  color={activeSize === size ? "primary" : "default"}
                  onClick={() => {
                    setActiveSize(size);
                  }}
                />
              ))}
            </span>
          </span>
        )}
        {currentItem.colors && (
          <span className="my-5">
            <p className={`text-lg font-normal font-poppins text-green-500`}>
              Select Color
            </p>
            <span className="flex flex-row mt-4 w-full">
              {currentItem.colors.map((color, index) => (
                <Chip
                  key={index}
                  label={color}
                  className="px-2 mx-3"
                  variant="outlined"
                  color={activeColor === color ? "primary" : "default"}
                  onClick={() => {
                    setActiveColor(color);
                  }}
                />
              ))}
            </span>
          </span>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            addToCart(
              currentItem.id,
              currentItem.category_id,
              activeColor,
              activeSize
            );
            setOpen(!open);
            setActiveColor("");
            setActiveSize("");
          }}
          variant="contained"
          color="primary"
          disableElevation
          disabled={disable}
        >
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  currentItem: state.shop.currentItem,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item_id, category_id, color, size) =>
    dispatch(addToCart(item_id, category_id, color, size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VariantModal);
