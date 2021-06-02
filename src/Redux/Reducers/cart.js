import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/actionTypes";

const cartReducer = (
  state = { cart: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case `${ADD_TO_CART}`:
      return {
        cart: action.payload.cart,
      };
    case `${REMOVE_FROM_CART}`:
      return {
        cart: action.payload.cart,
      };
    default:
      return state;
  }
};

export default cartReducer;
