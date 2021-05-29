import React, { Component } from "react";
import Product from "./Product";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products flex justify-center items-center m-0 p-0 list-none flex-wrap">
          {this.props.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}
