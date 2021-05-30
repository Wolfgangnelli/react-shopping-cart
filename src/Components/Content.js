import React from "react";
import Filter from "./Filter";
import Products from "./Products";

const Content = ({ products, size, sort, filterProducts, sortProducts }) => {
  return (
    <main>
      <div className="content grid">
        <div className="products-content">
          <Filter
            count={products.length}
            size={size}
            sort={sort}
            filterProducts={filterProducts}
            sortProducts={sortProducts}
          />
          <Products products={products} />
        </div>
        <div className="cart-sidebar">Cart Items</div>
      </div>
    </main>
  );
};

export default Content;
