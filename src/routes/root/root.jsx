import { useState } from "react";
import Header from "../../components/header/header.jsx";
import "./root.css";
import MealList from "../../components/meal-list/meal-list.jsx";
import AddMealButton from "../../components/add-meal-button/add-meal-button.jsx";

function Root() {
  return (
    <div className="app">
      <Header />
      <MealList />
      <AddMealButton />
    </div>
  );
}

export default Root;
