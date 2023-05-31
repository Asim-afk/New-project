import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Category from "./pages/Category";
import Hero from "./pages/Hero";

function App() {
  const navigate = useNavigate();
  const goToDefaultRoute = () => {
    navigate("/home");
  };
  useEffect(() => {
    goToDefaultRoute();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
        }}
      >
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
