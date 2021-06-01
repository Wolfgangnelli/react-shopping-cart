import React from "react";
import Cart from "./Cart";
import Filter from "../Redux/Containers/filter";
import Products from "../Redux/Containers/products";

const Content = ({ addToCart, cartItems, removeFromCart, createOrder }) => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="content grid">
        <div className="products-content">
          <Filter />
          <Products addToCart={addToCart} />
        </div>
        <div className="cart-sidebar">
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            createOrder={createOrder}
          />
        </div>
      </div>
    </main>
  );
};

export default Content;
