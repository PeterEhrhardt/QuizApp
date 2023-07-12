import React, { useState } from "react";

import "../styles/navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const handleMenuClick = () => {
    if (menuIsClicked) {
      document.getElementById("body").style.overflow = "auto";
      setMenuIsClicked(false);
    } else if (!menuIsClicked) {
      document.getElementById("body").style.overflow = "hidden";
      setMenuIsClicked(true);
    }
  };

  const fullMenu = () => {
    if (menuIsClicked) {
      return (
        <div
          className={
            menuIsClicked ? "full-menu-container" : "full-menu-container.active"
          }>
          <div id="border-top-container">
            <div id="border-top"></div>
          </div>
        </div>
      );
    }
    return;
  };

  const handleProfileClick = () => {
    if (!props.isSignedIn) {
      props.setDisplaySignIn(true);
    }
  };

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
          <div className="menu-or-profile-container">
            <div id="navbar-menu-container" onClick={handleMenuClick}>
              <FontAwesomeIcon icon={faBars} id="bars-icon-navbar" />
              <h3>Menu</h3>
            </div>
          </div>
          <div className="menu-or-profile-container" id="profile-no-border">
            <div id="profile-container-navbar" onClick={handleProfileClick}>
              <img
                src="src/assets/pizza-deliver.png"
                alt="Profile icon"
                id="profile-icon"
              />
              <h3>{props.isSignedIn ? "Profile" : "Sign In"}</h3>
            </div>
          </div>
        </div>
      </div>
      {menuIsClicked ? fullMenu() : null}
    </div>
  );
};

export default Navbar;
