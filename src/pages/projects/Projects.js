import React from "react";
import "./style.scss";
import Content_BoxA from "../../components/content/Content_BoxA.js";
import Image from "../../components/content/image_box/Image";
import Video from "../../components/content/video_box/Video";
import si from "../../media/images/SoullSkull.png";
import fp from "../../media/videos/Ojw1grey.mov";
import gv from "../../media/videos/GV-grayscale.mp4";

function Projects() {
  // Attributes
  const title1 = {
    a: "Projects",
    b: "Figments Of My Imagination",
    description:
      "Down below are the impressive few projects I was able to manage to successfully develop amongst dealing with school over the past three years. Of the select few, three are React.js applications, one Javascript application and one Java application.",
  };
  const project5 = {
    a: "Featured Project : orjacksoniv.com",
    b: "First Developed Portfolio Website...",
    description:
      "Below is a screen recording I have for you of my first fully integrated React.js website made in the Summer of 2022. During the process of development, I learned the basic concepts of React components, structure of a React Project & Website Hosting. This website is completely hosted on a web service provider known as Netlify.",
  };

  // Methods
  // JSX
  return (
    <div className="projects_container">
      {/* Projects Page Image */}
      <Image src={si} className="image_box" />
      {/* Projects Title Box */}
      <Content_BoxA
        title1={title1.a}
        text={title1.b}
        desc={title1.description}
      />

      {/* Galaga */}
      <div className="proj_item" id="galaga">
        <div className="p-title">Galaga (Java)</div>
        <div>
          <i>03/01/2021 - 12/27/2021</i>
        </div>
        <a href="https://github.com/CozyCoderIV/Galaga-VII" target="_blank">
          <button className="p-link">Code</button>
        </a>
      </div>
      <div className="proj_vid_box">
        <video
          className="proj_vid"
          id="galaga_vid"
          src={gv}
          autoPlay
          controls
          loop
        ></video>
      </div>

      {/* Rock Dodger */}
      <div className="proj_item" id="featured">
        <div className="p-title">Rock Dodger (Javascript)</div>
        <div>
          <i>04/15/2022 - 04/21/2022</i>
        </div>
        <a href="https://github.com/CozyCoderIV/Rock_Dodger" target="_blank">
          <button className="p-link">Code</button>
        </a>
      </div>
      <video className="proj_vid" src="" autoPlay controls loop></video>

      {/* React Calculator */}
      <div className="proj_item" id="featured">
        <div className="p-title">React Calculator</div>
        <div>
          <i>12/21/2022 - 12/24/2022</i>
        </div>
        <a
          href="https://github.com/CozyCoderIV/react_calculator"
          target="_blank"
        >
          <button className="p-link">Code</button>
        </a>
      </div>
      <video className="proj_vid" src="" autoPlay controls loop></video>

      {/* React Task Tracker */}
      <div className="proj_item" id="featured">
        <div className="p-title">React Task Tracker</div>
        <div>
          <i>12/16/2022 - 12/17/2022</i>
        </div>
        <a
          href="https://github.com/CozyCoderIV/my_task_tracker"
          target="_blank"
        >
          <button className="p-link">Code</button>
        </a>
      </div>
      <video className="proj_vid" src="" autoPlay controls loop></video>

      {/* React Website  */}
      <div className="proj_item" id="featured">
        <div className="p-title"> React Website (1st Edition)</div>
        <div>
          <i>03/01/2022 - 7/26/2022</i>
        </div>
        <a href="https://github.com/CozyCoderIV/otis_web" target="_blank">
          <button className="p-link">Code</button>
        </a>
      </div>
      <Video src={fp} />
    </div>
  );
}

export default Projects;
