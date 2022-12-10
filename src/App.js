import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Personas from "./components/Personas";
import ResponsiveRedesign from "./components/ResponsiveRedesign";
import IterativeDesign from "./components/IterativeDesign";
import Development from "./components/Development";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/personas" element={<Personas />} />
          <Route path="/responsive-redesign" element={<ResponsiveRedesign />} />
          <Route path="/iterative-design" element={<IterativeDesign />} />
          <Route path="/development" element={<Development />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <h6 className="footer"> &#xA9; 2022 My CS1300 Portfolio</h6>
    </div>
  );
}

export default App;
