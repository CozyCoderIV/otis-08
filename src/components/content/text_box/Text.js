import React from "react";
import "./style.scss";

function Text(props) {
  return (
    <div className="text">
      <i>{props.text}</i>
    </div>
  );
}

export default Text;
