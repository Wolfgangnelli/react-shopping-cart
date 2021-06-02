import products from "./products";
import cart from "./cart";
import order from "./order";
import { combineReducers } from "redux";

const reducers = {
  products,
  cart,
  order,
};

export default combineReducers(reducers);
