import { removeFromCart } from "../Actions/cart";
import Cart from "../../Components/Cart";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cart.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
