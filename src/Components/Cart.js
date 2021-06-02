import React, { useState } from "react";
import ItemInCart from "./ItemInCart";
import { formatCurrency } from "../Helpers/index";
import Fade from "react-reveal/Fade";

const Cart = ({ cartItems, removeFromCart, createOrder }) => {
  const [showCheckout, setshowCheckout] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  const createAOrder = (e) => {
    e.preventDefault();
    const order = {
      name: name,
      email: email,
      address: address,
      cartItems: cartItems,
    };
    createOrder(order);
  };

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
          <div>
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
                <button
                  onClick={() => setshowCheckout(true)}
                  className="button bt-primary ml-1"
                >
                  Proceed
                </button>
              </div>
            </div>
            {showCheckout ? (
              <Fade right cascade>
                <div className="flex text-semibold">
                  <form onSubmit={createAOrder} className="w-full">
                    <ul className="form-container">
                      <li>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </li>
                      <li>
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          onChange={(e) => setname(e.target.value)}
                        />
                      </li>
                      <li>
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          required
                          onChange={(e) => setaddress(e.target.value)}
                        />
                      </li>
                      <li>
                        <button type="submit" className="button bt-primary">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </Fade>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
