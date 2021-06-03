import { CREATE_ORDER, CLEAR_ORDER, GET_ORDERS } from "../Actions/actionTypes";

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
    case `${GET_ORDERS}_FULFILLED`:
      return {
        orders: payload.data,
      };
    default:
      return state;
  }
};

export default orderReducer;
