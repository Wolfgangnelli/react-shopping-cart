import { CREATE_ORDER, CLEAR_ORDER, CLEAR_CART } from "../Actions/actionTypes";

const initialState = {};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${CREATE_ORDER}_FULFILLED`:
      return {
        order: payload.data,
      };
    case `${CLEAR_ORDER}`:
      return {
        order: null,
      };
    default:
      return state;
  }
};

export default orderReducer;
