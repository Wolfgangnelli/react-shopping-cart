import "./index.css";
import AppLayout from "../Components/AppLayout";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

function App() {
  return (
    <AppLayout>
      <Header />
      <Content />
      <Footer />
    </AppLayout>
  );
}

export default App;
