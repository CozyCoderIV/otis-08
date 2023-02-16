import React from "react";
import "../home/style.scss";
import Image from "../../components/content/image_box/Image";
import wimg from "../../media/images/Greyscale3.jpg";
import wimg2 from "../../media/images/Aledo-grad3.png";
import Content_BoxA from "../../components/content/Content_BoxA";
import Video from "../../components/content/video_box/Video.js";
import fp from "../../media/videos/Ojw1grey.mov";

function Home() {
  const title1 = "Welcome";
  const title2 = "Education";
  const title3 = "Featured Project : orjacksonv.com";

  const subtitle1 = "Your Friendly Neighborhood Dev...";
  const subtitle2 = "From Texas to Louisiana...";
  const subtitle3 = "First Developed Portfolio Website...";

  return (
    <div className="home_container">
      <Image src={wimg} className="image_box" />
      <Content_BoxA className="welcome-box" title1={title1} text={subtitle1} />
      <Content_BoxA className="feat-box" title1={title3} text={subtitle3} />
      <Video src={fp} />
      <Content_BoxA
        className="education-box"
        title1={title2}
        text={subtitle2}
      />
      <Image src={wimg2} className="image_box" />
    </div>
  );
}

export default Home;
