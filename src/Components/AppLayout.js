import React from "react";

const AppLayout = (props) => {
  return <div className="grid-container grid h-full">{props.children}</div>;
};

export default AppLayout;
