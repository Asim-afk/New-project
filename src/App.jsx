import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/ContactUs/Contact";
import Hero from "./pages/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
