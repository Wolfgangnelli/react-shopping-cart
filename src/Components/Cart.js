import React from "react";
import ItemInCart from "./ItemInCart";
import { formatCurrency } from "../Helpers/index";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} in the cart
        </div>
      )}
      <div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <ItemInCart
                key={item._id}
                product={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
        </div>
        {cartItems.length === 0 ? null : (
          <div className="cart">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div>
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce(
                    (tot, currItem) => tot + currItem.price * currItem.count,
                    0
                  )
                )}
              </div>
              <button className="button bt-primary ml-1">Proceed</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
