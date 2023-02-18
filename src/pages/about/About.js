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
    l1: "Github",
    l2: "Agile/Scrum",
    l3: "Discord",
    l4: "Slack",
  }; // Software Skills
  const title2 = {
    a: "Developer SKills",
    b: "Coding Languages I've Utilized The Most",
    l1: "Javascript",
    l2: "React.js",
    l3: "Java",
    l4: "C",
  }; // Developer Skills
  const title3 = {
    a: "Experience",
    b: "Getting Out There In The World...",
    li1: "Lockheed Martin (June 2022-August 2022)",
    li2: "LSU IT Service/Print Desk (January 2022-Current)",
    li3: "LSU Residential Desk Assistant (January 2021 - Fall 2022)",
  }; // Experience
  const title4 = {
    a: "Organizations",
    b: "Meeting New People & Making A Difference",
    li1: "National Society of Black Engineers (NSBE)",
    li2: "LSU Freshman Student Government",
  }; // Organizations

  // Methods
  // JSX
  return (
    <div className="about_container">
      <div className="container1">
        <Image src={ai} />
        <Content_BoxA
          title1={title1.a}
          text={title1.b}
          li1={title1.l1}
          li2={title1.l2}
          li3={title1.l3}
          li4={title1.l4}
        />
        <Content_BoxA
          title1={title2.a}
          text={title2.b}
          li1={title2.l1}
          li2={title2.l2}
          li3={title2.l3}
          li4={title2.l4}
        />
      </div>
      <Content_BoxA
        title1={title3.a}
        text={title3.b}
        li1={title3.li1}
        li2={title3.li2}
        li3={title3.li3}
      />
      <div className="container2">
        <Content_BoxA
          title1={title4.a}
          text={title4.b}
          li1={title4.li1}
          li2={title4.li2}
        />
        <Image src={sg} />
      </div>
    </div>
  );
}

export default About;
