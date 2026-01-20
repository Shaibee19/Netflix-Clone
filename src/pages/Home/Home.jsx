import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const name = (props) => {
  return (
    <div className="Home">
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner__img" />
        <div className="hero__caption">
          <img src={hero_title} alt="" className="caption__img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero__btns">
            <button><img src={play_icon} alt="" className="btn"/>Play</button>
            <button><img src={info_icon} alt="" className="btn dark__btn"/>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default name;
