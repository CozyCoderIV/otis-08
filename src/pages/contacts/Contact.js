import React from "react";
import "./style.scss";
import Content_BoxA from "../../components/content/Content_BoxA";
import ci from "../../media/images/Lsu-grey.jpg";

function Contact() {
  // Attributes
  const title1 = {
    a: "Contacts",
    b: "Let's Keep In Touch...Maybe..",
    li1: "LSU Email: ojacks7@lsu.edu",
    li2: "Art/YT: spiritedhokage@gmail.com",
    li3: "Personal: ojacksoniv@gmail.com",
    li4: "Personal Cell: 817-308-1242",
  };
  // Methods
  // JSX
  return (
    <div className="contact_container">
      <Content_BoxA
        title1={title1.a}
        text={title1.b}
        li1={title1.li1}
        li2={title1.li2}
        li3={title1.li3}
        li4={title1.li4}
      />
      <img className="contact_image" src={ci}></img>
    </div>
  );
}

export default Contact;
