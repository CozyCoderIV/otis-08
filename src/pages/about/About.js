import React from "react";
import "./style.scss";
import Content_BoxA from "../../components/content/Content_BoxA";
import Image from "../../components/content/image_box/Image.js";
import ai from "../../media/images/BWOJ.png";
import sg from "../../media/images/LSU_StudentGov.jpg";

function About() {
  // Attributes
  const title1 = {
    a: "Sofware SKills",
    b: "Dev and Commmunication Tools Learned",
  };
  const title2 = {
    a: "Developer SKills",
    b: "Coding Languages I've Utilized The Most",
  };
  // const title2 = "Developer Skills";
  const title3 = { a: "Experience", b: "Getting Out There In The World..." };
  // const title3 = "Experience";
  const title4 = {
    a: "Organizations",
    b: "Meeting New People & Making A Difference",
  };

  // Methods
  // JSX
  return (
    <div className="about_container">
      <div className="container1">
        <Image src={ai} />
        <Content_BoxA title1={title1.a} text={title1.b} />
        <Content_BoxA title1={title2.a} text={title2.b} />
      </div>
      <Content_BoxA title1={title3.a} text={title3.b} />
      <div className="container2">
        <Content_BoxA title1={title4.a} text={title4.b} />
        <Image src={sg} />
      </div>
    </div>
  );
}

export default About;
