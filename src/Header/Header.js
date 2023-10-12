import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Navbar from "./Navbar";
import CompName from "./CompName";
import Btn from "./Btn";
import "../Header css/Head.css";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showbar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="head">
      <BurgerMenu sidebar={sidebar} showbar={showbar} />
      <Navbar sidebar={sidebar} showbar={showbar} />
      <CompName />
      <Btn />
    </div>
  );
};

export default Header;
