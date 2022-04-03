import { actionsTypes } from "./shopping.action-types";

export const addToCart = (item_id, category_id) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    payload: { item_id: item_id, category_id: category_id },
  };
};

export const removeFromCart = (item_id) => {
  return {
    type: actionsTypes.REMOVE_FROM_CART,
    payload: { item_id: item_id },
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
