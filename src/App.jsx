import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Category from "./pages/Category";
import Hero from "./pages/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
