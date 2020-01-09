import React from "react";
import "./Textarea.css";

function Textarea(props) {
  return (
    <div>
      <textarea
        autoFocus
        className="textarea"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Textarea;
