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
          id="halla-container"
          onClick={handleHallaClick}
          className="navbar-item"
        >
          halla
          <div>
            <ul id="DropdownMenu">
              <li>på</li>
              <li>deg</li>
              <li>din</li>
              <li>gris</li>
            </ul>
          </div>
        </div>
        <div className="navbar-item">på</div>
        <div className="navbar-item">deg</div>
        <div className="navbar-item">tjukken</div>
      </div>
    </div>
  );
};

export default Navbar;
