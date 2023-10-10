import "./App.css";
import Aboutus from "./Pages.js/Aboutus";
import ContactUs from "./Pages.js/ContactUs";
import Home from "./Pages.js/Home";
import Testimonials from "./Pages.js/Testimonials";
import Updates from "./Pages.js/Updates";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  console.log("test");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
};
export default App;
