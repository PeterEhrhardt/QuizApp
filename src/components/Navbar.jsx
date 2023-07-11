import React from "react";

import "../styles/navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div id="top-container-navbar">
      <div id="navbar-container">
        <div id="logo" className="logo">
          <h1>NPDb</h1>
        </div>
        <div id="input-container">
          <input
            type="text"
            id="input-navbar"
            placeholder="Search NPDb"></input>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "grey" }}
            id="search-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
