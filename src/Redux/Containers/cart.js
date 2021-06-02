import { removeFromCart } from "../Actions/cart";
import { createOrder, clearOrder, clearCart } from "../Actions/order";
import Cart from "../../Components/Cart";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cart.cart,
    order: state.order.order,
  };
};

const mapDispatchToProps = {
  removeFromCart,
  createOrder,
  clearOrder,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
