import React from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Card,
  CardHeader,
  Button,
  CardActions,
} from "@mui/material";
import { connect } from "react-redux";
import CartItem from "../components/Cart/CartItem";

function Checkout({ cart }) {
  return (
    <div
      className={`flex flex-col items-center justify-start p-16 w-full h-[90vh] bg-[#F7FBFF]`}
    >
      <div className="flex flex-row justify-around items-start w-full my-5 mx-5 h-full">
        <span className="w-[50vw] h-5/6 overflow-y-auto no-scrollbar shadow-xl rounded-lg bg-white">
          <Card className="w-[50vw]">
            <CardHeader title="Shopping Bag" />
            {cart.map((item) => {
              return (
                <CardActionArea key={item.id}>
                  <CardContent>
                    <CartItem item={item} key={item.id} />
                  </CardContent>
                </CardActionArea>
              );
            })}
          </Card>
        </span>
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
            <CardActions>
              <Button
                color="success"
                variant="contained"
                className="w-full h-16"
                disableElevation
              >
                Select Address
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

export default connect(mapStateToProps)(Checkout);
