import React from "react";

import { pizzaList } from "../assets/pizzas";

import "../styles/pizzaChart.css";

const PizzaChart = () => {
  return (
    <div id="top-container-chart">
      {pizzaList[2].name}
      <img src={pizzaList[2].img} alt="pizza" />
    </div>
  );
};

export default PizzaChart;
