import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import { addToTheCart, removeFromTheCart } from "../../Helpers/index";

export const addToCart = (store, product) => ({
  type: ADD_TO_CART,
  payload: { cart: addToTheCart(store, product) },
});

export const removeFromCart = (cartItems, product) => ({
  type: REMOVE_FROM_CART,
  payload: { cart: removeFromTheCart(cartItems, product) },
});
