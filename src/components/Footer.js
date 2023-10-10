import React from "react";
import Buttons from "./Buttons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-contact">
          <h3 className="footer-contact-h3">Contact</h3>
          <Buttons>CALL NOW</Buttons>
          <p>091766 10769</p>
        </div>
        <div className="footer-contact">
          <h3 className="footer-contact-h3">Address</h3>
          <Buttons>GET DIRECTION</Buttons>
          <p>
            <p>C-84, 2nd Cross Street Maharaja Nagar Tirunelveli, </p>
            <p>Tamil Nadu 627011 India</p>
          </p>
        </div>
        <div className="footer-hours">
          <h3 className="footer-contact-h3">Business Hours</h3>

          <p>
            <p>Mon: 9:30 AM – 8:00 PM</p>
            <p>Tue: 9:30 AM – 8:00 PM </p>
            <p>Wed: 9:30 AM – 8:00 PM </p>
            <p>Tus: 9:30 AM – 8:00 PM </p>
            <p>Fri: 9:30 AM – 8:00 PM </p>
            <p>Sat: 9:30 AM – 8:00 PM </p>
            <p>Sun: Closed</p>
          </p>
        </div>
      </div>
      <div className="hr"></div>
    </>
  );
};

export default Footer;
