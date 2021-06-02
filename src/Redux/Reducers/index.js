import products from "./products";
import cart from "./cart";
import { combineReducers } from "redux";

const reducers = {
  products,
  cart,
};

export default combineReducers(reducers);
