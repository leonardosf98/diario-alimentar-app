import { useState } from "react";
import Header from "./components/header/header.jsx";
import "./App.css";
import MealList from "./components/meal-list/meal-list.jsx";
import AddMealButton from "./components/add-meal-button/add-meal-button.jsx";
import Modal from "./components/modal/modal.jsx";

function App() {
  function openModal() {
    let modal = <Modal />;
    modal.style.display = "block";
  }
  M;
  return (
    <div className="App">
      <Header />
      <MealList />
      <AddMealButton onClick={openModal} />
    </div>
  );
}

export default App;
