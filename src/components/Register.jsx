import React, { useState } from "react";

import Pizza from "../assets/pizza.png";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Register = (props) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const register = async () => {
    if (registerPassword != passwordConfirm) {
      setErrorMessage("Passwords doesn't match");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      cookies.set("auth-token", user.user.refreshToken);
      console.log(user);
    } catch (err) {
      console.error(err.message);
      if (err.message.includes("invalid-email")) {
        setErrorMessage("Invalid email");
      } else if (err.message.includes("email-already-in-use")) {
        setErrorMessage("Email already in use");
      } else if (err.message.includes("weak-password")) {
        setErrorMessage("Password must be at least 6 characters");
      }
    }
    props.setIsSignedIn(cookies.get("auth-token"));
  };

  const handleSignUpClick = () => {
    props.setRegisterButtonClicked(false);
  };

  return (
    <div id="top-container">
      <div id="header-container">
        <div id="logo-and-pizza">
          <div id="logo-container" className="logo">
            <h1>NPDb</h1>
          </div>
          <img src={Pizza} alt="pizza" id="pizza" />
        </div>
      </div>
      <div id="menu-container-register">
        <div id="email-container-register">
          <div>
            <h4>Email</h4>
            <input
              type="text"
              className="input-sign-in"
              onChange={(e) => setRegisterEmail(e.target.value)}></input>
          </div>
          <div>
            <h4>Password</h4>
            <input
              type="password"
              name="password"
              className="input-sign-in"
              onChange={(e) => setRegisterPassword(e.target.value)}></input>
          </div>
          <div>
            <h4>Confirm Password</h4>
            <input
              type="password"
              name="password"
              className="input-sign-in"
              onChange={(e) => setPasswordConfirm(e.target.value)}></input>
          </div>
        </div>
        <div id="sign-in-container-register">
          <p id="password-mismatch" className="error-message">
            {errorMessage}
          </p>
          <button className="sign-in-button" onClick={register}>
            Sign Up
          </button>
          <div>
            <p>...or go back to signing in </p>
            <p id="here" onClick={handleSignUpClick}>
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
