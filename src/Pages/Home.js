import React from "react";
import Intro from "./Intro";
import Updates from "./Updates";
import Testimonials from "./Testimonials";
import "../styles/Home.css";
import Aboutus from "./Aboutus";
import ContactUs from "./ContactUs";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Updates />
      <Testimonials />
      <Aboutus />
      <ContactUs />
      <Link to="application">
        <Buttons>Application</Buttons>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
