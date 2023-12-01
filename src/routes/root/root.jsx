import { useState } from "react";
import Header from "../../components/header/header.jsx";
import "./root.css";
import MealList from "../../components/meal-list/meal-list.jsx";
import AddMealButton from "../../components/add-meal-button/add-meal-button.jsx";
function Root() {
  const [meals, setMeals] = useState([]);
  if (meals.length === 0) {
    setMeals("Nenhuma refeição cadastrada");
  }

  const addMeal = (mealData) => {
    console.log(1);
    setMeals((oldstate) => [...oldstate, mealData]);
  };

  return (
    <div>
      <Header />
      <MealList meals={meals} />
      <AddMealButton onMealSubmit={addMeal} />
    </div>
  );
}

export default Root;
