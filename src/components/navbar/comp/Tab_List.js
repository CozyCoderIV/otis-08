import React from "react";
import { Link } from "react-router-dom";
import Title from "../../content/title_box/Title";
import "./style.scss";

function Tab_List() {
  // Attributes
  const tabNames = ["Home", "About", "Projects", "Contact", "Art"];
  // Functions
  // JSX
  return (
    <div className="base_container">
      <Link id="link" to="/">
        <div className="tab_title">{tabNames[0]}</div>
      </Link>
      <Link id="link" to="/about">
        <div className="tab_title">{tabNames[1]}</div>
      </Link>
      <Link id="link" to="/projects">
        <div className="tab_title">{tabNames[2]}</div>
      </Link>
      <Link id="link" to="/contacts">
        <div className="tab_title">{tabNames[3]}</div>
      </Link>
      <Link id="link" to="/art">
        <div className="tab_title">{tabNames[4]}</div>
      </Link>
    </div>
  );
}

export default Tab_List;
