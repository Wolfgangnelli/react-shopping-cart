import React from "react";

const Filter = ({
  size,
  sort,
  filterProducts,
  sortProducts,
  filteredProducts,
  products,
}) => {
  return !filteredProducts ? (
    <div>Loading...</div>
  ) : (
    <div className="filter flex justify-evenly">
      <div className="filter-result font-bold flex flex-col items-center md:block">
        {filteredProducts.length} <span className="pl-1">Products</span>
      </div>
      <div className="filter-sort">
        <span className="font-semibold">Order: </span>
        <select
          name="order"
          id="order"
          value={sort}
          onChange={(e) => sortProducts(filteredProducts, e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        <span className="font-semibold">Filter: </span>
        <select
          name="size"
          id="size"
          value={size}
          onChange={(e) => filterProducts(products, e.target.value)}
        >
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
