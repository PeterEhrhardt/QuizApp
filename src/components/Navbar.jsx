import React from "react";

import "../styles/navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

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
          <div id="search-icon-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} id="search-icon" />
          </div>
        </div>
        <div id="menu-and-profile">
          <div id="navbar-menu-container">
            <FontAwesomeIcon icon={faBars} id="bars-icon-navbar" />
            <h3>Menu</h3>
          </div>
          <div id="profile-container-navbar">
            <FontAwesomeIcon icon={faCircleUser} id="profile-icon" />
            <h3>Profile</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
