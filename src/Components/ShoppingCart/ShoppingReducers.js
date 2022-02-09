import { TYPES } from "./ShoppingAction";
import { allProducts } from "../Products/Data/Categories";

export const ShoppingInitialState = {

  products: allProducts,
  cart: [{id:1}, {id:2}],
};

export function ShoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}