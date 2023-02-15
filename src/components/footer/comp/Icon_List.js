import React from "react";
import "./style.scss";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Icon_List() {
  return (
    <div className="icons_container">
      <a
        className="icon_link"
        href="https://github.com/CozyCoderIV"
        target="_blank"
      >
        <FaGithub className="icon" />
      </a>
      <a
        className="icon_link"
        href="https://www.instagram.com/o.j.daprince_iv/"
        target="_blank"
      >
        <FaInstagram className="icon" />
      </a>
      <a
        className="icon_link"
        href="https://www.linkedin.com/in/otis-jackson4/"
        target="_blank"
      >
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
}

export default Icon_List;
