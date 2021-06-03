import React from "react";
import Orders from "../Redux/Containers/orders";

export default function Admin() {
  return (
    <div className="py-8 px-4">
      <h1 className="font-bold text-6xl text-center">Orders</h1>
      <Orders />
    </div>
  );
}
