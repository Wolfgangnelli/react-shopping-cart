import { CREATE_ORDER, CLEAR_ORDER, CLEAR_CART } from "./actionTypes";
import axios from "axios";
import { API } from "../../config/config";

export const createOrder = (order) => {
  localStorage.clear("cartItems");
  return {
    type: CREATE_ORDER,
    payload: axios.post(`${API}/api/orders`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "POST",
      },
      data: order,
    }),
  };
};

export const clearCart = () => {
  localStorage.clear("cartItems");
  return {
    type: CLEAR_CART,
  };
};

export const clearOrder = () => ({
  type: CLEAR_ORDER,
});
