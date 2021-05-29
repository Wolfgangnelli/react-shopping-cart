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
    };
  }

  render() {
    return (
      <AppLayout>
        <Header />
        <Content products={this.state.products} />
        <Footer />
      </AppLayout>
    );
  }
}

export default App;
