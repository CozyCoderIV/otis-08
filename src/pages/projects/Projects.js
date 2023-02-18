import React from "react";
import "./style.scss";
import Content_BoxA from "../../components/content/Content_BoxA.js";

function Projects() {
  // Attributes
  const title1 = { a: "Projects", b: "Figments Of My Imagination" };

  // Methods
  // JSX
  return (
    <div className="projects_container">
      <Content_BoxA title1={title1.a} text={title1.b} />
    </div>
  );
}

export default Projects;
