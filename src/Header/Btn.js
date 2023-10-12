import React from "react";
import * as Io from "react-icons/io";
import * as Fi from "react-icons/fi";
import * as Bi from "react-icons/bi";
import "../Header css/Btn.css";

const Btn = () => {
  return (
    <div>
      <div className="header-div">
        <div>
          <Io.IoMdMail className="icons" />
          <button className="button">Contact Us</button>
        </div>
        <div>
          <Fi.FiPhoneCall className="icons" />
          <button className="button">Call Now</button>
        </div>
        <div>
          <Bi.BiSolidDirectionRight className="icons" />
          <button className="button">Get Direction</button>
        </div>
      </div>
    </div>
  );
};

export default Btn;
