import { Box } from "@mui/material";
import React from "react";

function SelectAddress(props) {
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
            <span className="flex flex justify-center items-center w-80 h-80 rounded-lg border-2 border-gray-300 hover:border-gray-700 mx-5 my-3">
              <span></span>
            </span>
            <span className="flex justify-center items-center w-80 h-80 rounded-lg border-2 border-gray-300 hover:border-gray-700 mx-5 my-3">
              Add New Address
            </span>
          </div>
        </Box>
      )}
    </div>
  );
}

export default SelectAddress;
