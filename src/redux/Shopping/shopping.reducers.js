import { Categories } from "../../api/Categories";
import { actionsTypes } from "./shopping.action-types";

const initialState = {
  cart: [],
  currentItem: {},
  categories: Categories,
  category: {},
  shopName: "Mohsin Books",
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TO_CART:
      return {};
    case actionsTypes.REMOVE_FROM_CART:
      return {};
    case actionsTypes.ADJUST_QUANTITY:
      return {};
    case actionsTypes.CLEAR_CART:
      return {};
    case actionsTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionsTypes.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default shoppingReducer;
