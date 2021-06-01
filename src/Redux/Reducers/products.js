import { GET_PRODUCTS } from "../Actions/actionTypes";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case `${GET_PRODUCTS}_FULFILLED`:
      return {
        products: action.payload.data,
      };
    default:
      return state;
  }
};

export default productsReducer;
