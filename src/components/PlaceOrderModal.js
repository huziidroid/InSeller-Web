import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  selectAddress,
  selectCart,
  selectCartTotal,
} from "../redux/slice/cartSlice";
import { selectStore } from "../redux/slice/storeSlice";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { usePlaceOrderMutation } from "../redux/api";

const schema = yup.object().shape({
  trxid: yup
    .string()
    .required("Trxid is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits"),
  recipt: yup.string().required("You need to provide a file"),
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PlaceOrderModal({ open, setOpen, setSelected, method }) {
  const total = useSelector(selectCartTotal);
  const cart = useSelector(selectCart);
  const store = useSelector(selectStore);
  const address = useSelector(selectAddress);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeOrder, { isLoading }] = usePlaceOrderMutation();
  const [receipt, setReceipt] = React.useState(null);

  const {
    control,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      trxid: "",
      recipt: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (method) => {
    try {
      const item_cart = cart.map((item) => {
        return {
          item_id: item?.item?.id,
          quantity: item.quantity,
        };
      });
      const formData = new FormData();
      formData.append("trxid", getValues("trxid"));
      formData.append("file", receipt);
      formData.append("store_id", store?.id);
      formData.append("method", method);
      formData.append("cart", JSON.stringify(item_cart));
      formData.append("total", total);
      formData.append("customer_details", JSON.stringify(address));
      const { data, error } = await placeOrder(formData);
      if (error) {
        throw new Error(error);
      }

      toast.success(data?.message);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setOpen(!open);
      setSelected((prev) => !prev);
      dispatch(clearCart());
      navigate(`/${store.url_name}`);
    }
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        setOpen(false);
        setSelected((prev) => !prev);
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Payment Processing"}</DialogTitle>
      <DialogContent className="w-[35vw]">
        <div className="flex flex-col justify-center items-start w-full h-full">
          <p className="text-lg font-semibold">{method}</p>
          {method === "Easy Paisa" && (
            <>
              <p className="text-base font-normal mb-2">{`Please deposit Rs. ${total} into Easypaisa Account Number ${store.phone_number} and provide Trx ID to be verified by Seller.`}</p>
              <form className="flex flex-col mt-3">
                <Controller
                  name="trxid"
                  control={control}
                  render={({ field }) => (
                    <>
                      <label>Easypaisa Trx ID</label>
                      <input
                        {...field}
                        type="number"
                        placeholder="Enter Easypaisa Trx ID"
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-tl-md rounded-md py-1 px-4 block w-64 h-8 text-sm font-normal leading-tight appearance-none my-2"
                      />
                    </>
                  )}
                />
                <p className="text-sm font-light text-red-500">
                  {errors.trxid && errors.trxid.message}
                </p>
                <Controller
                  name="recipt"
                  control={control}
                  render={({ field: { onBlur, ref, onChange } }) => (
                    <>
                      <label>Attach Receipt</label>
                      <input
                        ref={ref}
                        onChange={(e) => {
                          setReceipt(e.target.files[0]);
                          onChange(e);
                        }}
                        onBlur={onBlur}
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg"
                        placeholder="Select Receipt"
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-tl-md rounded-md py-1 px-4 block w-64 h-8 text-sm font-normal leading-tight appearance-none my-2"
                      />
                    </>
                  )}
                />
                <p className="text-sm font-light text-red-500">
                  {errors.recipt && errors.recipt.message}
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={isLoading}
          disabled={!isValid && method === "Easy Paisa"}
          color="success"
          size="small"
          variant="contained"
          onClick={() => onSubmit(method)}
        >
          Place Order
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}

export default PlaceOrderModal;
