import { useState } from "react";
import { Link } from "react-router-dom";
import "./add-meal-form.css";
function AddMealForm({ onSubmit }) {
  const todayDate = new Date().toJSON().slice(0, 10);
  const todayTime = new Date().toJSON().slice(11, 16);
  const [mealName, setMealName] = useState("");
  const [mealDate, setMealDate] = useState(todayDate);
  const [mealTime, setMealTime] = useState(todayTime);

  return (
    <div className="modal">
      <Link to="/">Voltar</Link>
      <form
        onSubmit={(event) => {
          onSubmit({ mealName, mealDate, mealTime });
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
          <label for="date">Selecione o horário da refeição</label>
          <input
            type="time"
            name="time"
            id="time"
            value={mealTime}
            onChange={(event) => {
              setMealTime(event.target.value);
            }}
          />
        </fieldset>
        <Link to={"/addFood"}>Adicionar alimento</Link>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default AddMealForm;
