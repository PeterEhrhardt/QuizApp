import React, { useState, useRef } from "react";

import { auth, provider } from "../firebase-config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import GoogleLogo from "../assets/google.png";
import Pizza from "../assets/pizza.png";

import "../styles/signIn.css";

import Register from "./Register";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const SignIn = (props) => {
  const [registerButtonClicked, setRegisterButtonClicked] = useState(false);

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      cookies.set("auth-token", user.user.refreshToken);
    } catch (err) {
      console.log(err);
    }
    props.setIsSignedIn(cookies.get("auth-token"));
  };

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      cookies.set("auth-token", user.user.refreshToken);
      console.log(user);
      props.setIsSignedIn(cookies.get("auth-token"));
    } catch (err) {
      console.error(err);
      setErrorMessage("Invalid email and/or password");
    }
  };

  const handleSignUpClick = () => {
    setErrorMessage("");
    setRegisterButtonClicked(true);
  };

  if (registerButtonClicked) {
    return (
      <Register
        setRegisterButtonClicked={setRegisterButtonClicked}
        setIsSignedIn={props.setIsSignedIn}
      />
    );
  }

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
      <div id="menu-container">
        <button onClick={signInWithGoogle} id="google-sign">
          <img src={GoogleLogo} alt="Google-logo" />
          Continue with Google
        </button>
        <p id="or">OR</p>
        <div id="email-container">
          <div>
            <h4>
              Email
              <p id="error-message" className="error-message">
                {errorMessage}
              </p>
            </h4>
            <input
              type="text"
              className="input-sign-in"
              onChange={(e) => setSignInEmail(e.target.value)}></input>
          </div>
          <div>
            <h4>Password</h4>
            <input
              type="password"
              name="password"
              className="input-sign-in"
              onChange={(e) => setSignInPassword(e.target.value)}></input>
          </div>
        </div>
        <div id="sign-in-container">
          <button className="sign-in-button" onClick={signIn} type="button">
            Sign In
          </button>
          <div>
            <p>...or sign up </p>
            <p id="here" onClick={handleSignUpClick}>
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
