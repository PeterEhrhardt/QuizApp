import { useState } from "react";

import "./App.css";

import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import PizzaChart from "./components/PizzaChart";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(cookies.get("auth-token"));

  const [displaySignIn, setDisplaySignIn] = useState(false);

  if (displaySignIn) {
    return (
      <div>
        <SignIn
          setIsSignedIn={setIsSignedIn}
          setDisplaySignIn={setDisplaySignIn}
        />
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar isSignedIn={isSignedIn} setDisplaySignIn={setDisplaySignIn} />
        <PizzaChart />
      </div>
    </>
  );
}

export default App;
