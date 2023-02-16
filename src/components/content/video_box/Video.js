import React from "react";
import "./style.scss";

function Video(props) {
  return (
    <div className="vid-box">
      <video id="vid" src={props.src} autoPlay controls loop></video>
    </div>
  );
}

export default Video;
