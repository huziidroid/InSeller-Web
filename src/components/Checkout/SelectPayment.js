import { Box } from "@mui/material";
import React from "react";

function SelectPayment(props) {
  const { value, index, ...other } = props;
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
          <div className="flex flex-row flex-wrap w-full justify-start">
            <span className="flex justify-center items-center w-60 h-32 rounded-lg border-2 border-gray-300 hover:border-gray-700 mx-5 my-3">
              Cash On delivery
            </span>
            <span className="flex justify-center items-center w-60 h-32 rounded-lg border-2 border-gray-300 hover:border-gray-700 mx-5 my-3">
              Easy Paisa
            </span>
            <span className="flex justify-center items-center w-60 h-32 rounded-lg border-2 border-gray-300 hover:border-gray-700 mx-5 my-3">
              Jazz Cash
            </span>
          </div>
        </Box>
      )}
    </div>
  );
}

export default SelectPayment;
