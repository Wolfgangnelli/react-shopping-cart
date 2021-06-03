import React, { useEffect } from "react";
import { formatCurrency } from "../Helpers";

const Orders = ({ orders, getOrders }) => {
  useEffect(() => {
    getOrders();
  }, []);

  return !orders ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-col w-full">
      <div className="flex pt-6 pb-4">
        <p className="font-semibold">Total orders:</p>
        <span className="text-green-600 font-semibold ml-2">
          {orders.length}
        </span>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>EMAIL</th>
            <th>TOTAL</th>
            <th>PRODUCTS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.createdAt}</td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.email}</td>
              <td>{order.total && formatCurrency(order.total)}</td>
              {order.cartItems.length > 0 ? (
                <td>
                  {order.cartItems.map((item) => (
                    <p key={item._id}>
                      {item.count} x {item.title}
                    </p>
                  ))}
                </td>
              ) : (
                <td></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
