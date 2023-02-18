import React from "react";
import "../home/style.scss";
import Image from "../../components/content/image_box/Image";
import wimg from "../../media/images/Greyscale3.jpg";
import wimg2 from "../../media/images/Aledo-grad3.png";
import Content_BoxA from "../../components/content/Content_BoxA";
import Video from "../../components/content/video_box/Video.js";
import fp from "../../media/videos/Ojw1grey.mov";

function Home() {
  // Attributes
  const title1 = {
    a: "Welcome",
    b: "As Your Friendly Neighborhood Dev...",
    c: "I'm Otis R. Jackson IV",
    d: "Software Dev Aith A Concentration in UI/UX Design",
    description:
      "On a more individual level, I'd further describe myself as an young artistic and theoretical mind in my approach to many aspects in life. I officially began my software development journey in 2020 after taking an intro to development course my senior year in highschool. Fortunately, I've found a unique way to utilize my artistic sense of design within the ever evolving field of computer science through Front-End Web Development and UI / UX Design.",
  };
  const title2 = { a: "Education", b: "From Texas to Louisiana..." };
  const title3 = {
    a: "Featured Project : orjacksoniv.com",
    b: "First Developed Portfolio Website...",
    description:
      "Below is a screen recording I have for you of my first fully integrated React.js website made in the Summer of 2022. During the process of development, I learned the basic concepts of React components, structure of a React Project & Website Hosting. This website is completely hosted on a web service provider known as Netlify.",
  };

  // const subtitle1 = "Your Friendly Neighborhood Dev...";
  // const subtitle2 = {a: "From Texas to Louisiana...", b: ""};
  // const subtitle3 = "First Developed Portfolio Website...";

  // Methods
  // JSX
  return (
    <div className="home_container">
      <Image src={wimg} className="image_box" />
      <Content_BoxA
        className="welcome-box"
        title1={title1.a}
        text={title1.b}
        title2={title1.c}
        text2={title1.d}
        desc={title1.description}
      />
      <Content_BoxA
        className="education-box"
        title1={title2.a}
        text={title2.b}
        li1="Aledo Highschool"
        lt1="Spring 2016 - Spring 2020"
        li2="Weatherford College"
        lt2="Spring 2018 - Spring 2020"
        li3="Louisiana State University"
        lt3="Fall 2020 - Fall 2023 (Expected)"
      ></Content_BoxA>
      <Image src={wimg2} className="image_box" />
      <Content_BoxA
        className="feat-box"
        title1={title3.a}
        text={title3.b}
        desc={title3.description}
      ></Content_BoxA>
      <Video src={fp} />
    </div>
  );
}

export default Home;
