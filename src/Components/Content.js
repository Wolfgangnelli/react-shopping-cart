import React from "react";
import Cart from "./Cart";
import Filter from "./Filter";
import Products from "./Products";

const Content = ({
  products,
  size,
  sort,
  filterProducts,
  sortProducts,
  addToCart,
  cartItems,
  removeFromCart,
  createOrder,
}) => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="content grid">
        <div className="products-content">
          <Filter
            count={products.length}
            size={size}
            sort={sort}
            filterProducts={filterProducts}
            sortProducts={sortProducts}
          />
          <Products products={products} addToCart={addToCart} />
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
