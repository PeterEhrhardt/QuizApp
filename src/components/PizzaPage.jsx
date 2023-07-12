import React, { useState, useEffect } from "react";

import { storage } from "../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

import "../styles/pizzaPage.css";

const PizzaPage = () => {
  const [activePizza, setActivePizza] = useState("Grandiosa Kjøttdeig & Løk");
  const [pizzaUrl, setPizzaUrl] = useState("");

  const fetchImg = async () => {
    const url = await getDownloadURL(ref(storage, `images/${activePizza}.png`));
    setPizzaUrl(url);
  };

  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <div id="top-container-pizza-page">
      <div id="pizza-info-container">
        <h1 id="pizza-title">{activePizza}</h1>
        <div id="pizza-img-container">
          <img src={pizzaUrl} alt={activePizza} id="pizza-img" />
          <div className="pizza-rating-container">
            <p className="pizza-rating-title">Your Rating: 7.9</p>
            <div className="slider-body-container">
              <div className="slider-body"></div>
            </div>
            <div className="slider-knob"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
