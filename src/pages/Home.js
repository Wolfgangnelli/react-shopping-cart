import React from "react";
import Cart from "../Redux/Containers/cart";
import Filter from "../Redux/Containers/filter";
import Products from "../Redux/Containers/products";

export default function Home() {
  return (
    <div className="content grid">
      <div className="products-content">
        <Filter />
        <Products />
      </div>
      <div className="cart-sidebar">
        <Cart />
      </div>
    </div>
  );
}
