import React from "react";
import Text from "./text_box/Text";

function Content_BoxB(props) {
  // Attributes
  // Methods
  // JSX
  return (
    <div className="content_boxB">
      {/* flex div (2 containers) : Horizontal*/}
      <div>
        {/* First Container */}
        <div className="text_container_B">
          <Title />
          <div className="subtitle_B">Subtitle</div>
          <Text />
        </div>

        {/* Second Container */}
        <div className="video_container">
          <video id="vid" src={props.video} autoPlay controls loop></video>
        </div>
      </div>
    </div>
  );
}

export default Content_BoxB;
