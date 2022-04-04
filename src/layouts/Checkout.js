import React from "react";
import {
  CardActionArea,
  CardContent,
  Card,
  CardHeader,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import OrderSummary from "../components/Checkout/OrderSummary";
import { useNavigate } from "react-router-dom";

function Checkout({ cart }) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col items-center justify-start p-16 w-full h-[90vh] bg-[#F7FBFF]`}
    >
      <p className="text-2xl font-semibold font-poppins text-gray-700 self-start">
        Shopping Bag
      </p>
      <div className="flex flex-row justify-around items-start w-full my-5 mx-5 h-full">
        <span className="w-[50vw] h-5/6 overflow-y-auto no-scrollbar shadow-xl rounded-lg bg-white">
          <Card className="w-[50vw]">
            {/* <CardHeader title="Shopping Bag" /> */}
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
        <OrderSummary
          button={
            <Button
              color="success"
              variant="contained"
              className="w-full h-16"
              disableElevation
              onClick={() => {
                navigate("/address");
              }}
            >
              Select Address
            </Button>
          }
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

export default connect(mapStateToProps)(Checkout);
