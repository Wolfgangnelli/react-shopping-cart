import React from "react";
import "./index.css";
import AppLayout from "../Components/AppLayout";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import store from "../store";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
  }

  render() {
    return (
      <Provider store={store}>
        <AppLayout>
          <Header />
          <Content />
          <Footer />
        </AppLayout>
      </Provider>
    );
  }
}

export default App;
