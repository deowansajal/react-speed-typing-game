import React from "react";
import "./Timer.css";

function Timer(props) {
  return <div className="timer">{props.duration}</div>;
}

export default Timer;
