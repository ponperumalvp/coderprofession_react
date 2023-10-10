import React from "react";
import Intro from "./Intro";
import Updates from "./Updates";
import Testimonials from "./Testimonials";
import "../styles/Home.css";
import Aboutus from "./Aboutus";
import ContactUs from "./ContactUs";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Updates />
      <Testimonials />
      <Aboutus />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
