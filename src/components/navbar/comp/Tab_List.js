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
      <Link id="link" to={"/src/pages/home/Home.js"}>
        <Title className="title" title={tabNames[0]} />
      </Link>
      <Link id="link" to={"/src/pages/about/About.js"}>
        <Title className="title" title={tabNames[1]} />
      </Link>
      <Link id="link" to={"/src/pages/projects/Projects.js"}>
        <Title className="title" title={tabNames[2]} />
      </Link>
      <Link id="link" to={"/src/pages/contacts/Contact.js"}>
        <Title className="title" title={tabNames[3]} />
      </Link>
      <Link id="link" to={"/src/pages/art/Art.js"}>
        <Title className="title" title={tabNames[4]} />
      </Link>
    </div>
  );
}

export default Tab_List;
