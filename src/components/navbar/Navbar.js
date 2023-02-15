import React from "react";
import "./style.scss";
import Title from "../content/title_box/Title";
import logo from "../../media/images/Otis_logo2.png";
import Tab_List from "./comp/Tab_List";

function Navbar() {
  // Attributes
  const title = "Otis IV";
  // Functions
  // JSX
  return (
    <div className="base_container">
      <img id="nav_logo" src={logo}></img>
      <div id="title">
        <Title title={title} />
      </div>
      <div>
        <Tab_List id="tab_list" />
      </div>
    </div>
  );
}

export default Navbar;
