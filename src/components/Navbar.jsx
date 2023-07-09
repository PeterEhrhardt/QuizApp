import React from "react";

import "../styles/Navbar.css";

const Navbar = () => {
  const handleHallaClick = (click) => {
    console.log("click");
  };

  return (
    <div id="navbar-container">
      <div id="logo-container"> QuizJizz</div>
      <div id="tema-container">
        <div
          id="quiz-container"
          onClick={handleHallaClick}
          className="navbar-item"
        >
          Quiz
          <ul id="drop-down-menu">
            <li>Sport</li>
            <li>Film</li>
            <li>Friluft</li>
            <li>Geografi</li>
          </ul>
        </div>
        <div className="navbar-item">Ola</div>
        <div className="navbar-item">er</div>
        <div className="navbar-item">feit</div>
      </div>
    </div>
  );
};

export default Navbar;
