import "./add-meal-button.css";
import { Link } from "react-router-dom";

function AddMealButton() {
  return <Link to={"/createMeal"}>Adicionar refeição</Link>;
}

export default AddMealButton;
