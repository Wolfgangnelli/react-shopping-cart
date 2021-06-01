import {
  GET_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "./actionTypes";
import axios from "axios";
import { API } from "../../config/config";
import { sortedProducts } from "../../Helpers/index";

export const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: axios.get(`${API}/api/products`),
});

export const filterProducts = (products, size) => ({
  type: FILTER_PRODUCTS_BY_SIZE,
  payload: {
    size,
    products:
      size === "" || size === "ALL"
        ? products
        : products.filter(
            (product) => product.availableSizes.indexOf(size) >= 0
          ),
  },
});

export const sortProducts = (filteredProducts, sort) => ({
  type: ORDER_PRODUCTS_BY_PRICE,
  payload: {
    sort,
    products: sortedProducts(filteredProducts, sort),
  },
});
