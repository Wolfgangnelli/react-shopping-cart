import React from "react";
import { formatCurrency } from "../Helpers/index";

const Product = ({ product }) => {
  return (
    <li>
      <div className="product">
        <a href={"#" + product._id}>
          <img src={product.image} alt={product.title} />
          <p className="pt-1 text-purple-500 font-semibold">{product.title}</p>
        </a>
        <div className="product-price">
          <div className="font-bold text-3xl pl-12">
            {formatCurrency(product.price)}
          </div>
          <button className="button bt-primary">Add To Cart</button>
        </div>
      </div>
    </li>
  );
};

export default Product;
