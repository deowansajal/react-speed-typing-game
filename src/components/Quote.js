import React from "react";
import "./Quote.css";

function Quote(props) {
  const value = props.value.split("");

  return (
    <div className="quote">
      {props.quote.split("").map((q, i) => {
        return (
          <span
            key={i}
            className={
              value[i] ? (value[i] !== q ? "incorrect" : "correct") : ""
            }
          >
            {q}
          </span>
        );
      })}
    </div>
  );
}

export default Quote;
