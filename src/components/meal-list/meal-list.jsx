import { useState } from "react";
import "./meal-list.css";

function MealList() {
  const [meals, setMeals] = useState([]);
  if (meals.length === 0) {
    setMeals("Nenhuma refeição cadastrada");
  }

  return (
    <div>
      <h2>Refeições</h2>
      <ul className="meals-list">{meals}</ul>
    </div>
  );
}

export default MealList;
