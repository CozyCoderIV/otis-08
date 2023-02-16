import React from "react";
import "./style.scss";
import Title from "./title_box/Title";
import Text from "./text_box/Text";

function Content_BoxA(props) {
  // Attributes
  // Methods
  // JSX
  return (
    <div className="content_boxA">
      <div className="container">
        <div className="cbA_title_box">
          <Title className="cbA_title" title={props.title1} />
        </div>
        <div className="subtitle">
          <Text text={props.text} />
        </div>
        <div>Text</div>
      </div>
    </div>
  );
}

export default Content_BoxA;
