import React from "react";
import "../styles/Contactus.css";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="line"></div>
      <h3 className="h3">Contact Us</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8327470490312!2d77.7556979!3d8.707427899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040db05b63fc27%3A0xd3ba446ea0cad099!2sCoderProfession!5e0!3m2!1sen!2sin!4v1696616464547!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0, target: "blank" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="contactus-iframe"
      ></iframe>
    </div>
  );
};

export default ContactUs;
