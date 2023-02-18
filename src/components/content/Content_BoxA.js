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
        {/* Content Box Title & Subtitle */}
        <div className="cbA_title_box">
          <Title className="cbA_title" title={props.title1} />
        </div>
        <div className="subtitle">
          <Text text={props.text} />
        </div>
        {/* Optional Additional Titles (4) */}
        {props.title2 && (
          <div className="cbA_title_box">
            <Title className="cbA_title" title={props.title2} />
          </div>
        )}
        {props.text2 && (
          <div className="subtitle">
            <Text className="cbA_title" text={props.text2} />
          </div>
        )}
        {props.title3 && (
          <div className="cbA_title_box">
            <Title className="cbA_title" title={props.title3} />
          </div>
        )}
        {props.text3 && (
          <div className="subtitle">
            <Text className="cbA_title" text={props.text3} />
          </div>
        )}
        {props.title4 && (
          <div className="cbA_title_box">
            <Title className="cbA_title" title={props.title4} />
          </div>
        )}
        {props.text4 && (
          <div className="subtitle">
            <Text className="cbA_title" text={props.text4} />
          </div>
        )}
        <hr />
        {/* Optional List Items (3)*/}
        {props.li1 && (
          <div className="list_item">
            <div className="lt_c">
              <Title className="list_title" title={props.li1} />
            </div>
            <Text className="list_text" text={props.lt1} />
          </div>
        )}
        {props.li2 && (
          <div className="list_item">
            <div className="lt_c">
              <Title className="list_title" title={props.li2} />
            </div>
            <Text className="list_text" text={props.lt2} />
          </div>
        )}
        {props.li3 && (
          <div className="list_item">
            <div className="lt_c">
              <Title className="list_title" title={props.li3} />
            </div>
            <Text className="list_text" text={props.lt3} />
          </div>
        )}
        {/* Description Box */}
        <div className="desc_box">
          <p className="d_text">
            <i>{props.desc}</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content_BoxA;
