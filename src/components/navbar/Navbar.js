import React from "react";
import "./style.scss";
import Title from "../content/title_box/Title";
import logo from "../../media/images/Otis_logo2.png";

function Navbar() {
  // Attributes
  const title = "Otis IV";
  const pageNum = 5;
  // Functions
  // JSX
  return (
    <div className="base_container">
      <img id="nav_logo" src={logo}></img>
      <Title title={title} />
    </div>
  );
}

export default Navbar;
