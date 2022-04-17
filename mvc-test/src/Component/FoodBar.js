import React, { useState, useEffect } from "react";
import "../CSS/foodBar.css";
import Product from "./Product";
export default function FoodBar() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("data_food.json")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  return (
    <div>
      <div className="title-food">
        <span>Sua lai</span>
        <div className="line"></div>
      </div>
      <div className="food-list">
        {suggestions.map((current) => (
          <Product
            item={current}
            title={current.name}
            image={current.image}
            price={current.price}
            stt={current.id}
            key={current.id}
          />
        ))}
      </div>
    </div>
  );
}
