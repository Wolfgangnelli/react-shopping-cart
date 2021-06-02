import React from "react";
import Cart from "../Redux/Containers/cart";
import Filter from "../Redux/Containers/filter";
import Products from "../Redux/Containers/products";

const Content = ({ createOrder }) => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="content grid">
        <div className="products-content">
          <Filter />
          <Products />
        </div>
        <div className="cart-sidebar">
          <Cart createOrder={createOrder} />
        </div>
      </div>
    </main>
  );
};

export default Content;
