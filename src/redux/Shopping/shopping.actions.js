import { actionsTypes } from "./shopping.action-types";

export const addToCart = (item_id, category_id, color, size) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    payload: {
      item_id: item_id,
      category_id: category_id,
      color: color,
      size: size,
    },
  };
};

export const removeFromCart = (item_id, category_id) => {
  return {
    type: actionsTypes.REMOVE_FROM_CART,
    payload: { item_id: item_id, category_id: category_id },
  };
};

export const adjustQuantity = (item_id, category_id, quantity) => {
  return {
    type: actionsTypes.ADJUST_QUANTITY,
    payload: { id: item_id, quantity: quantity, category_id: category_id },
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

export const setColor = (color) => {
  return {
    type: actionsTypes.SET_COLOR,
    payload: { color: color },
  };
};
export const setSize = (size) => {
  return {
    type: actionsTypes.SET_SIZE,
    payload: { size: size },
  };
};

export const setStore = (store) => {
  return {
    type: actionsTypes.SET_STORE,
    payload: {
      store: store,
    },
  };
};

export const setCategoriesProducts = (categoriesProducts) => {
  return {
    type: actionsTypes.SET_CATEGORIES_PRODUCTS,
    payload: {
      categoriesProducts: categoriesProducts,
    },
  };
};

export const setCategory = (category) => {
  return {
    type: actionsTypes.SET_CATEGORY,
    payload: {
      category: category,
    },
  };
};
