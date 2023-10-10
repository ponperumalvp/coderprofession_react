import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import * as faIcon from "react-icons/fa";
import * as RxIcon from "react-icons/rx";
import { useState } from "react";
import { SideBarDatas } from "./SideBarDatas";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showbar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <li>
          <Link to="#" onClick={() => showbar()} className="menu-bar">
            <faIcon.FaBars />
          </Link>
        </li>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <li className="menu-toggle">
          <Link to="#" onClick={() => showbar()} className="menu-bar">
            <RxIcon.RxCross1 />
          </Link>
        </li>
        <ul onClick={() => showbar()} className="navbar-ul">
          {SideBarDatas.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
