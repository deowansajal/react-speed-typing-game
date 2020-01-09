import React from "react";
import "./Container.css";

function Container(props) {
  return (
    <div className={`container ${props.className ? props.className : ""}`}>
      <div className="inner">{props.children}</div>
    </div>
  );
}

export default Container;
