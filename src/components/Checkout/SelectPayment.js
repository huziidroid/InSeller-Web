import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import PlaceOrderModal from "../PlaceOrderModal";

const paymentMethods = {
  1: "Cash On Delivery",
  2: "Easy Paisa",
};

const PaymentBox = ({ title, selected, setSelected, value, setMethod }) => {
  return (
    <span
      onClick={() => {
        setSelected(value);
        setMethod(+value === 1 ? "Cash on delivery" : "Easy Paisa");
      }}
      className={`flex justify-center items-center w-60 h-32 rounded-lg border-2 ${
        selected ? "border-green-700" : "border-gray-300"
      } hover:border-green-700 mx-5 my-3`}
    >
      <AiOutlineCheckCircle
        size={18}
        className="mr-8"
        color={selected ? "green" : ""}
      />
      {title}
    </span>
  );
};

function SelectPayment(props) {
  const { value, index, ...other } = props;
  const [selected, setSelected] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [method, setMethod] = React.useState("");

  useEffect(() => {
    if (selected) {
      setOpen(true);
    }
  }, [selected]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="flex flex-row flex-wrap w-full justify-start h-60">
            {Object.keys(paymentMethods).map((key) => (
              <PaymentBox
                key={key}
                title={paymentMethods[key]}
                selected={selected === key}
                setSelected={setSelected}
                value={key}
                setMethod={setMethod}
              />
            ))}
          </div>
        </Box>
      )}
      <PlaceOrderModal
        open={open}
        setOpen={setOpen}
        setSelected={setSelected}
        method={method}
      />
    </div>
  );
}

export default SelectPayment;
