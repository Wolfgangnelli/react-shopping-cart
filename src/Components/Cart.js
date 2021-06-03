import React, { useState, useEffect } from "react";
import ItemInCart from "./ItemInCart";
import { formatCurrency } from "../Helpers/index";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

const Cart = ({
  cartItems,
  removeFromCart,
  createOrder,
  clearOrder,
  order,
  clearCart,
}) => {
  const [showCheckout, setshowCheckout] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  /*  useEffect(() => {
    setshowCheckout(false);
    console.log(cartItems);
  }, [cartItems]); */

  const createAOrder = (e) => {
    e.preventDefault();
    const order = {
      name: name,
      email: email,
      address: address,
      cartItems: cartItems,
      total: cartItems.reduce((tot, curr) => tot + curr.price * curr.count, 0),
    };
    createOrder(order);
  };

  const closeModal = () => {
    clearCart();
    clearOrder();
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
      {order && (
        <Modal isOpen={true} ariaHideApp={false} onRequestClose={closeModal}>
          <Zoom>
            <button
              className="top-0 right-0 float-right cursor-pointer focus:outline-none"
              onClick={() => closeModal()}
            >
              <span style={{ fontSize: "24px" }}>
                <i className="fas fa-times"></i>
              </span>
            </button>

            <div className="order-details">
              <h3 className="text-green-500 py-3 font-bold text-3xl">
                Your order has been placed.
              </h3>
              <h2 className="py-1 font-semibold">Order {order._id}</h2>
              <ul className="mt-5">
                <li>
                  <div>Name: </div>
                  <div>{order.name}</div>
                </li>
                <li>
                  <div>Email: </div>
                  <div>{order.email}</div>
                </li>
                <li>
                  <div>Address: </div>
                  <div>{order.address}</div>
                </li>
                <li>
                  <div>Date: </div>
                  <div>{order.createdAt}</div>
                </li>
                <li>
                  <div>Total: </div>
                  <div>{formatCurrency(order.total)}</div>
                </li>
                <li>
                  <div>Cart items: </div>
                  <div>
                    {order.cartItems.map((item) => (
                      <div key={item.title}>
                        {item.count} {" x "} {item.title}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </Zoom>
        </Modal>
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
