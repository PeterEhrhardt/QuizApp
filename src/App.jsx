import { useState } from "react";

import "./App.css";

import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(cookies.get("auth-token"));

  if (!isSignedIn) {
    return (
      <>
        <SignIn setIsSignedIn={setIsSignedIn} />
      </>
    );
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
