import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Categories />
    </>
  );
}

export default App;
