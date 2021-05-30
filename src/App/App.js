// feature 1
import React from "react";
import "./index.css";
import AppLayout from "../Components/AppLayout";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import data from "../data.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: [],
    };
  }

  filterProducts = (size) => {
    console.log(size);
    if (size === "ALL") {
      this.setState({
        size: size,
        products: data.products,
      });
    } else {
      this.setState({
        size: size,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(size) >= 0
        ),
      });
    }
  };

  sortProducts = (sort) => {
    console.log(sort);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((item) => item._id !== product._id),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({
      cartItems,
    });
  };

  render() {
    return (
      <AppLayout>
        <Header />
        <Content
          products={this.state.products}
          size={this.state.size}
          sort={this.state.sort}
          filterProducts={this.filterProducts}
          sortProducts={this.sortProducts}
          addToCart={this.addToCart}
          cartItems={this.state.cartItems}
          removeFromCart={this.removeFromCart}
        />
        <Footer />
      </AppLayout>
    );
  }
}

export default App;
