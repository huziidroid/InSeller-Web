import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAddress,
  selectAddress,
  setAddress,
} from "../../redux/slice/cartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  notes: yup.string(),
});

const AddressField = ({ title, placeholder, type, name, control }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <>
        <p className="text-sm font-semibold">{title}</p>
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-tl-md rounded-md py-1 px-4 block w-64 h-8 text-sm font-normal leading-tight appearance-none my-2"
        />
      </>
    )}
  />
);
const AddressBox = ({ address, setShowAddress, dispatch }) => (
  <span className="flex flex-col justify-start iems-center border-2 border-green-400 h-54 w-80 rounded-lg p-4 mb-3">
    <IconButton
      className="self-end"
      onClick={() => {
        setShowAddress(false);
        dispatch(deleteAddress());
      }}
    >
      <p className="text-sm font-light text-blue-400 mr-3">Delete</p>
      <RiDeleteBin6Line size={15} color="red" />
    </IconButton>
    <AddressFieldData title="Name:" value={address.name} />
    <AddressFieldData title="Mobile Number:" value={address.mobile} />
    <AddressFieldData title="City:" value={address.city} />
    <AddressFieldData title="Address:" value={address.address} />
    <AddressFieldData title="Notes:" value={address.notes} />
  </span>
);

const AddressFieldData = ({ title, value }) => (
  <span className="flex flex-row my-2">
    <p className="text-sm font-semibold text-gray-500">{title}</p>
    <p className="text-sm font-semibold ml-4">{value}</p>
  </span>
);

function SelectAddress(props) {
  const address = useSelector(selectAddress);
  const { value, index, ...other } = props;
  const [showAddress, setShowAddress] = React.useState(
    address?.name.length > 0
  );
  const dispatch = useDispatch();
  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      mobile: "",
      city: "",
      address: "",
      notes: "",
    },
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
          {showAddress ? (
            <AddressBox
              address={address}
              setShowAddress={setShowAddress}
              dispatch={dispatch}
            />
          ) : (
            <>
              <div className="flex flex-row justify-between items-start flex-wrap w-full justify-start h-60">
                <span className="mb-4">
                  <AddressField
                    control={control}
                    name="name"
                    title="Name"
                    placeholder="Enter name"
                    type="text"
                  />
                  <p className="text-sm font-light text-red-500">
                    {errors?.name && errors?.name?.message}
                  </p>
                  <AddressField
                    title="City"
                    placeholder="Enter city"
                    type="text"
                    name="city"
                    control={control}
                  />
                  <p className="text-sm font-light text-red-500">
                    {errors?.city && errors?.city?.message}
                  </p>
                </span>
                <span className="mb-4">
                  <AddressField
                    title="Mobile Number"
                    placeholder="Enter your mobile number"
                    type="number"
                    name="mobile"
                    control={control}
                  />
                  <p className="text-sm font-light text-red-500">
                    {errors?.mobile && errors?.mobile?.message}
                  </p>
                  <AddressField
                    title="Address"
                    placeholder="Enter your address"
                    type="textarea"
                    name="address"
                    control={control}
                  />
                  <p className="text-sm font-light text-red-500">
                    {errors?.address && errors?.address?.message}
                  </p>
                </span>
                <span className="mb-4">
                  <AddressField
                    title="Notes"
                    type="textarea"
                    placeholder="Enter any notes"
                    name="notes"
                    control={control}
                  />
                  <p className="text-sm font-light text-red-500">
                    {errors?.notes && errors?.notes?.message}
                  </p>
                </span>
              </div>
              <Button
                disabled={!isValid}
                variant="contained"
                color="success"
                className="w-40 h-8 mt-4 self-center"
                size="small"
                disableElevation
                onClick={() => {
                  dispatch(setAddress(getValues()));
                  setShowAddress(!showAddress);
                }}
              >
                Save
              </Button>
            </>
          )}
        </Box>
      )}
    </div>
  );
}

export default SelectAddress;
