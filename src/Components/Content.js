import React from "react";
import Products from "./Products";
const Content = ({ products }) => {
  return (
    <main>
      <div className="content grid">
        <div className="products-content">
          <Products products={products} />
        </div>
        <div className="cart-sidebar">Cart Items</div>
      </div>
    </main>
  );
};

export default Content;
