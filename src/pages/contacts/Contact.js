import React from "react";
import "./style.scss";
import Content_BoxA from "../../components/content/Content_BoxA";

function Contact() {
  // Attributes
  const title1 = { a: "Contacts", b: "Let's Keep In Touch...Maybe.." };
  // Methods
  // JSX
  return (
    <div className="contact_container">
      <Content_BoxA title1={title1.a} text={title1.b} />
    </div>
  );
}

export default Contact;
