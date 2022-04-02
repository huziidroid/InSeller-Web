import { actionsTypes } from "./shopping.action-types";

export const addToCart = (itemId) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    payload: { id: itemId },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionsTypes.REMOVE_FROM_CART,
    payload: { id: itemId },
  };
};

export const adjustQuantity = (itemId, quantity) => {
  return {
    type: actionsTypes.ADJUST_QUANTITY,
    payload: { id: itemId, quantity: quantity },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionsTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: actionsTypes.CLEAR_CART,
  };
};

export const getCategory = (category_id) => {
  return {
    type: actionsTypes.GET_CATEGORY,
    payload: category_id,
  };
};
