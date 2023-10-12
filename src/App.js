import "./App.css";
import Header from "./Header/Header";
import Aboutus from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Testimonials from "./Pages/Testimonials";
import Updates from "./Pages/Updates";
import Review from "./Review/Review";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {
  console.log("test");
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
