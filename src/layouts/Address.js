import React from "react";
import {
  CardContent,
  Card,
  CardHeader,
  Tab,
  Tabs,
  useTheme,
} from "@mui/material";
import OrderSummary from "../components/Checkout/OrderSummary";
import SelectAddress from "../components/Checkout/SelectAddress";
import SelectPayment from "../components/Checkout/SelectPayment";
import SwipeableViews from "react-swipeable-views";
import { useSelector } from "react-redux";
import { selectAddress } from "../redux/slice/cartSlice";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Address() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const address = useSelector(selectAddress);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div
      className={`flex flex-col items-center justify-start p-16 w-full h-[100vh] bg-[#F7FBFF] no-scrollbar`}
    >
      <div className="flex flex-row justify-around items-start w-full my-5 mx-5 h-full">
        <span className="w-[50vw] h-5/6 shadow-xl rounded-lg bg-white">
          <Card className="w-[50vw]">
            <CardHeader title="Select Address" />
            <CardContent>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Address" {...a11yProps(0)} />
                <Tab label="Payment" {...a11yProps(1)} />
              </Tabs>

              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <SelectAddress value={value} index={0} dir={theme.direction} />
                <SelectPayment value={value} index={1} dir={theme.direction} />
              </SwipeableViews>
            </CardContent>
          </Card>
        </span>
        <OrderSummary
          button_title="Proceed to payment"
          onClick={() => setValue(1)}
          show_btn={value === 0}
          disabled={!address?.name.length > 0}
        />
      </div>
    </div>
  );
}

export default Address;
