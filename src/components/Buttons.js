import React from "react";
import "../styles/Buttons.css";

const Buttons = ({ click, children }) => {
  return (
    <button onClick={click} className="btn">
      {children}
    </button>
  );
};

export default Buttons;
