import { useState } from "react";
import { Link } from "react-router-dom";

function Modal({ onSubmit }) {
  const today = new Date().toJSON().slice(0, 10);
  const [mealName, setMealName] = useState("");
  const [mealDate, setMealDate] = useState(today);
  const [mealQuantity, setMealQuantity] = useState(12);
  const [liquidFood, setLiquidFood] = useState();
  const [solidFood, setSolidFood] = useState();

  return (
    <div className="modal">
      <Link to="/">Voltar</Link>
      <form
        onSubmit={(event) => {
          onSubmit({ mealName, mealDate, mealQuantity });
        }}
      >
        <fieldset>
          <label for="meal-name">Digite o nome da refeição</label>
          <input
            type="text"
            name="meal-name"
            id="meal-name"
            value={mealName}
            onChange={(event) => {
              setMealName(event.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <label for="date">Selecione a data da refeição</label>
          <input
            type="date"
            name="date"
            id="date"
            value={mealDate}
            onChange={(event) => {
              setMealDate(event.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <label for="solid"> Sólido</label>
          <input
            type="radio"
            name="solid"
            id="solid"
            onChange={(event) => {
              setSolidFood(event.target.checked);
            }}
          />
          <label for="liquid">Líquido</label>
          <input
            type="radio"
            name="liquid"
            id="liquid"
            checked
            onChange={(event) => {
              setLiquidFood(event.target.checked);
            }}
          />
          <label>Digite a quantidade em </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={mealQuantity}
            onChange={(event) => {
              setMealQuantity(event.target.value);
            }}
          />
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Modal;
