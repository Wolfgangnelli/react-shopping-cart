import { connect } from "react-redux";
import Products from "../../Components/Products";
import { getProducts } from "../Actions/products";
import { addToCart } from "../Actions/cart";

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products.products,
    filteredProducts: state.products.filteredProducts,
  };
};
const mapDispatchToProps = {
  getProducts,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
