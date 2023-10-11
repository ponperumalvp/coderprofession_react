import React from "react";
import Aiphoto from "../icons/computerpicture.jpg";
import "../styles/Intro.css";
import Buttons from "../components/Buttons";

const Intro = () => {
  return (
    <div className="intro">
      <h1 className="intro-h1">CoderProfession</h1>
      <p className="intro-p1">
        Certified Software Programming Training, Internship, Web and Mobile App
        Development, Custom App Development @Maharajanagar, Tirunelveli.
      </p>
      <p className="intro-p2">Opening at 9:30 AM tomorrow</p>
      <Buttons>Contact Us</Buttons>
      <img src={Aiphoto} alt="ai" className="intro-img" />
    </div>
  );
};

export default Intro;
