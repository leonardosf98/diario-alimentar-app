import { useState } from "react";
import { Link } from "react-router-dom";
import "./add-meal-form.css";
import AddMealItem from "../addMealItem/addMealItem";

function AddMealForm({ onMealSubmit }) {
  const todayDate = new Date().toJSON().slice(0, 10);
  const todayTime = new Date().toJSON().slice(11, 16);
  // TODO: Refatorar os estados para centralizar em um objeto só
  const [mealName, setMealName] = useState("");
  const [mealDate, setMealDate] = useState(todayDate);
  const [mealTime, setMealTime] = useState(todayTime);
  const [mealItem, setMealItem] = useState([]);

  const handleItemSubmit = (event, mealItemData) => {
    event.preventDefault();
    const newItem = {
      itemName: mealItemData[0],
      measureUnit: mealItemData[1],
      quantity: mealItemData[2],
    };
    setMealItem((oldState) => [...oldState, newItem]);
  };

  return (
    <div className="modal">
      <Link to="/">Voltar</Link>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onMealSubmit({ mealName, mealDate, mealTime, mealItem });
        }}
      >
        <fieldset>
          <label htmlFor="meal-name">Digite o nome da refeição</label>
          <select
            type="text"
            name="meal-name"
            id="meal-name"
            value={mealName}
            onChange={(event) => {
              setMealName(event.target.value);
            }}
          >
            <option value="">Café da manhã</option>
            <option value="">Lanche</option>
            <option value="">Almoço</option>
            <option value="">Jantar</option>
            <option value="">Ceia</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="date">Selecione a data da refeição</label>
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
          <label htmlFor="date">Selecione o horário da refeição</label>
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
        {mealItem.map((item) => {
          return (
            <div>{`${item.itemName}: ${item.quantity} ${item.measureUnit}`}</div>
          );
        })}
        <AddMealItem onItemSubmit={handleItemSubmit}></AddMealItem>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default AddMealForm;
