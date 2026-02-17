import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Naviget from "./components/navbar/Naviget";

const App = () => {
  return (
    <div>
      <Naviget />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Routes</h1>} />
      </Routes>
    </div>
  );
};

export default App;
