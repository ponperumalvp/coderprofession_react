import "./App.css";
import Aboutus from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Testimonials from "./Pages/Testimonials";
import Updates from "./Pages/Updates";
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
