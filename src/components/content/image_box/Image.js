import React from "react";
import "./style.scss";

function Image(props) {
  return (
    <div className="image_box">
      <img src={props.src} id="img"></img>
    </div>
  );
}

export default Image;
