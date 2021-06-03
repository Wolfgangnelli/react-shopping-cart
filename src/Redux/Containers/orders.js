import { getOrders } from "../Actions/order";
import Orders from "../../Components/Orders";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.order.orders,
  };
};

const mapDispatchToProps = {
  getOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
