import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import React from "react";

function OrderSummary({ button }) {
  return (
    <div className="w-[30vw] h-5/6 overflow-y-auto no-scrollbar shadow-xl rounded-lg bg-white">
      <Card>
        <CardHeader title="Order Summary" />
        <CardContent className="w-full">
          <span className="flex flex-row w-full justify-between border-b-2 mb-10 mt-5">
            <p className="text-lg font-semibold font-poppins text-gray-500">
              Item Total
            </p>
            <p className="text-xl font-semibold font-poppins text-gray-700">
              Rs.1000
            </p>
          </span>
          <span className="flex flex-row w-full justify-between border-b-2 my-10">
            <p className="text-lg font-semibold font-poppins text-gray-500">
              Delivery Charges
            </p>
            <p className="text-xl font-semibold font-poppins text-green-700">
              Free
            </p>
          </span>
          <span className="flex flex-row w-full justify-between border-b-2 my-10">
            <p className="text-lg font-semibold font-poppins text-gray-500">
              Grand Total
            </p>
            <p className="text-xl font-semibold font-poppins text-gray-700">
              Rs. 1000
            </p>
          </span>
        </CardContent>
        <CardActions>{button}</CardActions>
      </Card>
    </div>
  );
}

export default OrderSummary;
