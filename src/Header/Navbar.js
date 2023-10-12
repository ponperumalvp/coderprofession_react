import React from "react";
import { Link } from "react-router-dom";
import "../Header css/Navbar.css";

import { SideBarDatas } from "./SideBarDatas";

const Navbar = ({ showbar, sidebar }) => {
  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
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
