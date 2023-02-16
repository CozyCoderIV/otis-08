import React from "react";
import "./style.scss";
import Icon_List from "./comp/Icon_List";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Text from "../content/text_box/Text.js";

function Footer() {
  // Attributes
  const quoteA = "Inherited Will, The Destiny of Age, The Dreams of Its People";
  const quoteB = "As Long As People Continue To Pursue the Meaning Of Freedom,";
  const quoteC = "These Things Will Never Cease!";
  const quoteD = "- Gol D. Roger";
  // Functions
  // JSX
  return (
    <div className="foot_container">
      <div id="icon_list_container">
        <Icon_List />
      </div>
      <div id="text_box_container">
        <div className="quote">{quoteA}</div>
        <div className="quote">{quoteB}</div>
        <div className="quote">{quoteC}</div>
        <div className="quote">{quoteD}</div>
      </div>
    </div>
  );
}

export default Footer;
