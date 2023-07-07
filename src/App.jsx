import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/ContactUs/Contact";
import Hero from "./pages/Hero/Hero";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 50,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route index element={<Navigate to="/home" />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
