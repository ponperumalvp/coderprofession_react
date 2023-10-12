import React from "react";
import "../Header css/BurgerMenu.css";

const BurgerMenu = ({ sidebar, showbar }) => {
  return (
    <div className="nav">
      <div
        className={sidebar ? "bars clicked" : "bars unclicked"}
        onClick={() => showbar()}
      >
        <div className="bars">
          <div className="burger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
