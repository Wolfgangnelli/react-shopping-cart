import Filter from "../../Components/Filter";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../Actions/products";

const mapStateToProps = (state, ownProps) => {
  return {
    filteredProducts: state.products.filteredProducts,
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.products,
  };
};

const mapDispatchToProps = {
  filterProducts,
  sortProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
