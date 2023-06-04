import React from "react";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="logo-container"> QuizJizz</div>
      <div id="tema-container">
        <div id="halla-container" className="navbar-item">
          Browse Categories
        </div>
        <div className="navbar-item">One minute quiz</div>
        <div className="navbar-item">Endless Quiz</div>
      </div>
    </div>
  );
};

export default Navbar;
