import { useState } from "react";
import Header from "./components/header/header.jsx";
import "./App.css";
import MealList from "./components/meal-list/meal-list.jsx";
import AddMealButton from "./components/add-meal-button/add-meal-button.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MealList />
      <AddMealButton />
    </div>
  );
}

export default App;
