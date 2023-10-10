import React from "react";
import "../styles/Updates.css";

const Updates = () => {
  return (
    <div className="updates" id="update">
      <div className="line"></div>
      <h3 className="h3">UPDATES</h3>
      <div className="updates-content">
        <div className="update-content-1">
          <p className="update-p1">Posted on Jun 8, 2023</p>
          <p className="update-p2">Internship Program for College Students</p>
        </div>
        <div className="update-content-2">
          <p className="update-p1">Posted on Jun 8, 2023</p>
          <p className="update-p2">
            Certified Full Stack (MERN Stack) Training
          </p>
        </div>
      </div>
    </div>
  );
};

export default Updates;
