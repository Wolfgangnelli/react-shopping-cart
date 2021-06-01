import { GET_PRODUCTS } from "./actionTypes";
import axios from "axios";
import { API } from "../../config/config";

export const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: axios.get(`${API}/api/products`),
});
