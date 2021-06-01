import { connect } from "react-redux";
import Products from "../../Components/Products";
import { getProducts } from "../Actions/products";

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products.products,
    filteredProducts: state.products.filteredProducts,
  };
};
const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
