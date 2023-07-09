import React from "react";

import "../styles/Categories.css";

const Categories = () => {
  const categoriesList1 = [
    "General Knowledge",
    "Books",
    "Film",
    "Music",
    "Video Games",
  ];

  const categoriesList2 = ["Animals", "Computers", "Mathematics", "Geography"];
  const categoriesList3 = [
    "Celebrities",
    "Mythology",
    "History",
    "Politics",
    "Science & Nature",
  ];
  const categoriesList4 = ["Sports", "Television", "Vehichles", "Art"];

  return (
    <div id="top-container">
      <div id="categories-container">
        <div className="category-row" id="category-row-1">
          {categoriesList1.map((category) => {
            return (
              <div className="category-container">
                <h3 className="category">{category}</h3>
              </div>
            );
          })}
        </div>
        <div className="category-row" id="category-row-2">
          {categoriesList2.map((category) => {
            return (
              <div className="category-container">
                <h3 className="category">{category}</h3>
              </div>
            );
          })}
        </div>
        <div className="category-row" id="category-row-3">
          {categoriesList3.map((category) => {
            return (
              <div className="category-container">
                <h3 className="category">{category}</h3>
              </div>
            );
          })}
        </div>
        <div className="category-row" id="category-row-4">
          {categoriesList4.map((category) => {
            return (
              <div className="category-container">
                <h3 className="category">{category}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
