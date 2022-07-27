import React from "react";
import { CardActionArea, CardContent, Card, CardHeader } from "@mui/material";

import CartItem from "../components/Cart/CartItem";
import OrderSummary from "../components/Checkout/OrderSummary";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { selectStore } from "../redux/slice/storeSlice";

function Checkout() {
  const cart = useSelector(selectCart);
  const store = useSelector(selectStore);
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col items-center justify-start p-16 w-full h-[90vh] bg-[#F7FBFF]`}
    >
      <div className="flex flex-row justify-around items-start w-full my-5 mx-5 h-full">
        <span className="w-[50vw] h-5/6 overflow-y-auto no-scrollbar shadow-xl rounded-lg bg-white">
          <Card className="w-[50vw]">
            <CardHeader title="Shopping Bag" />
            {cart.map((item, key) => {
              return (
                <CardActionArea key={key}>
                  <CardContent>
                    <CartItem item={item} key={key} />
                  </CardContent>
                </CardActionArea>
              );
            })}
          </Card>
        </span>
        <OrderSummary
          button_title="Select Address"
          onClick={() => navigate(`/${store?.url_name}/address`)}
          disabled={cart.length === 0}
        />
      </div>
    </div>
  );
}

export default Checkout;
