import React from "react";
import "./index.css";
import AppLayout from "../Components/AppLayout";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <Header />
        <Content />
        <Footer />
      </AppLayout>
    );
  }
}

export default App;
