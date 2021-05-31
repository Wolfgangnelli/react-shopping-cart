import React, { Component } from "react";
import ItemInCart from "./ItemInCart";
import { formatCurrency } from "../Helpers/index";
import Fade from "react-reveal/Fade";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: false,
      name: "",
      email: "",
      address: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };

  render() {
    const { cartItems, removeFromCart } = this.props;
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
                        (tot, currItem) =>
                          tot + currItem.price * currItem.count,
                        0
                      )
                    )}
                  </div>
                  <button
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                    className="button bt-primary ml-1"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              {this.state.showCheckout ? (
                <Fade right cascade>
                  <div className="flex text-semibold">
                    <form onSubmit={this.createOrder} className="w-full">
                      <ul className="form-container">
                        <li>
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            onChange={this.handleInput}
                          />
                        </li>
                        <li>
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            onChange={this.handleInput}
                          />
                        </li>
                        <li>
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            required
                            onChange={this.handleInput}
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
  }
}
