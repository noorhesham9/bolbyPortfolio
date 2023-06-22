import React from "react";
import "./home.css";
// import Me from "../../assets/avatar-1.svg";
import Me from "../../assets/user1.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src={Me}
          style={{ maxWidth: "150px" }}
          alt="my_photo"
          className="home__img"
        />
        <h1 className="home__name">Noor Dev</h1>
        <span className="home_education">i'm a Front-End develober</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire ME
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
