import "./add-meal-button.css";
import { Link } from "react-router-dom";

function AddMealButton() {
  return (
    // <button className="add-meal-button">Adicionar refeição</button>;
    <Link to={"/createMeal"}>Adicionar refeição</Link>
  );
}

export default AddMealButton;
