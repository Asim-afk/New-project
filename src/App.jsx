import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Protected from "./components/Protected";
import About from "./pages/About";
import AdminLayout from "./pages/Admin/AdminLayout";
import Homepage from "./pages/Admin/Dashboard/homepage/Homepage";
import Login from "./pages/Admin/Dashboard/login/Login";
import RegisterForm from "./pages/Admin/Dashboard/login/RegisterForm";
import Lists from "./pages/Admin/Lists";
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
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              index
              element={<Protected Component={<Navigate to="dashboard" />} />}
            />
            <Route path="list" element={<Protected Component={<Lists />} />} />
            <Route
              path="register"
              element={<Protected Component={<RegisterForm />} />}
            />
            <Route
              path="dashboard"
              element={<Protected Component={<Homepage />} />}
            />
            <Route
              path="*"
              element={<Protected Component={<Navigate to="dashboard" />} />}
            />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Hero />} />
            <Route path="*" element={<h1>404 not found</h1>} />
            <Route index element={<Navigate to="/home" />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/contact-us" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
