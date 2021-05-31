import React from "react";
import { formatCurrency } from "../Helpers";
import Fade from "react-reveal/Fade";

const ItemInCart = ({ product, removeFromCart }) => {
  return (
    <Fade left>
      <li className="flex-col md:flex-row">
        <div className="flex justify-center md:block">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="text-base md:text-xl">
          <div className="text-center">{product.title}</div>
          <div className="flex flex-col items-center md:flex-row md:justify-center text-center">
            <span>
              {formatCurrency(product.price)} x {product.count}
            </span>
            <button
              className="mt-2 md:ml-2 button md:right-0"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </button>
          </div>
        </div>
      </li>
    </Fade>
  );
};

export default ItemInCart;
