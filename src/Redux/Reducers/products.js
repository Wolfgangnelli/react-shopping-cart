import {
  GET_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "../Actions/actionTypes";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case `${GET_PRODUCTS}_FULFILLED`:
      return {
        products: action.payload.data,
        filteredProducts: action.payload.data,
      };
    case `${FILTER_PRODUCTS_BY_SIZE}`:
      return {
        ...state,
        filteredProducts: action.payload.products,
        size: action.payload.size,
      };
    case `${ORDER_PRODUCTS_BY_PRICE}`:
      return {
        ...state,
        sort: action.payload.sort,
        filteredProducts: action.payload.products,
      };
    default:
      return state;
  }
};

export default productsReducer;
