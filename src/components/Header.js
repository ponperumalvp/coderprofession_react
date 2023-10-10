import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";
import * as Io from "react-icons/io";
import * as Fi from "react-icons/fi";
import * as Bi from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <Navbar className="header-nav" />
      <h2 className="header-h2">CoderProfession</h2>
      <div className="header-div">
        <div className="icons">
          <Io.IoMdMail />
          <button className="button">Contact Us</button>
        </div>
        <div className="icons">
          <Fi.FiPhoneCall />
          <button className="button">Call Now</button>
        </div>
        <div className="icons">
          <Bi.BiSolidDirectionRight />
          <button className="button">Get Direction</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
