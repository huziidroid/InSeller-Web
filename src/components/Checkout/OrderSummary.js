import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartShipping,
  selectCartSubTotal,
} from "../../redux/slice/cartSlice";

const SummaryChild = ({ title, value }) => (
  <span className="flex flex-row w-full justify-between border-b-2 mb-10 mt-5">
    <p className="text-sm font-semibold font-poppins text-gray-500">{title}</p>
    <p className="text-sm font-bold font-poppins text-gray-700">{value}</p>
  </span>
);

function OrderSummary({
  button_title,
  onClick,
  show_btn = true,
  disabled = false,
}) {
  const total = useSelector(selectCartTotal);
  const shipping = useSelector(selectCartShipping);
  const subTotal = useSelector(selectCartSubTotal);
  return (
    <div className="w-[30vw] h-5/7 overflow-y-auto no-scrollbar shadow-xl rounded-lg bg-white">
      <Card>
        <CardHeader title="Order Summary" />
        <CardContent className="w-full">
          <SummaryChild title="Item Total" value={subTotal} />
          <SummaryChild
            title="Shipping"
            value={shipping === 0 ? "Free" : `Rs. ${shipping}`}
          />
          <SummaryChild title="Grand Total" value={total} />
        </CardContent>
        <CardActions>
          {show_btn && (
            <Button
              disabled={disabled}
              color="success"
              variant="contained"
              className="w-full h-12"
              size="small"
              disableElevation
              onClick={onClick}
            >
              {button_title}
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default OrderSummary;
