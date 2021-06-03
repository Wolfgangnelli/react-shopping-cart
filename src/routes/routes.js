import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";

export default function routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
}
