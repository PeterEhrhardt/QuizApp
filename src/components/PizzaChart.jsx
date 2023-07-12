import React, { useState } from "react";

import { pizzaList } from "../assets/pizzas";

import "../styles/pizzaChart.css";

import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";

const PizzaChart = () => {
  return (
    <div id="top-container-chart">
      {pizzaList[0].name}
      <img src={pizzaList[0].img} alt="pizza" />
    </div>
  );
};

export default PizzaChart;
