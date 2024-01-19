import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./add-meal-form.css";
import AddMealItem from "../addMealItem/addMealItem";
import Header from "../header/header";

function AddMealForm({ onMealSubmit, meal }) {
  const todayDate = {
    day: new Date().toLocaleString("pt-br").slice(0, 2),
    month: new Date().toLocaleString("pt-br").slice(3, 5),
    year: new Date().toLocaleString("pt-br").slice(6, 10),
  };

  const todayTime = new Date().toLocaleString("pt-br").slice(12, 17);

  setMealItem(meal.mealItem);
  if (meal) {
    initialMealName = meal.mealName;
    initialMealDate = meal.mealDate;
    initialMealTime = meal.mealTime;
  } else {
    initialMealName = "";
    initialMealDate = `${todayDate.year}-${todayDate.month}-${todayDate.day}`;
    initialMealTime = todayTime;
  }

  const [mealName, setMealName] = useState(initialMealName);
  const [mealDate, setMealDate] = useState(initialMealDate);
  const [mealTime, setMealTime] = useState(initialMealTime);
  const [error, setError] = useState(false);

  const handleItemSubmit = (event, mealItemData) => {
    event.preventDefault();
    const newItem = {
      itemName: mealItemData[0],
      quantity: mealItemData[1],
      measureUnit: mealItemData[2],
    };
    setMealItem((oldState) => [...oldState, newItem]);
  };

  useEffect(() => {
    setError(mealItem.length === 0);
  }, [mealItem]);

  return (
    <div className="body">
      <Header />
      <Link to="/" className="goback-link btn-sm btn btn-primary">
        Voltar
      </Link>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          if (mealItem.length === 0) {
            setError(true);
            return;
          } else {
            onMealSubmit({ mealName, mealDate, mealTime, mealItem });
          }
        }}
      >
        <div>
          <label className="form-label" htmlFor="meal-name">
            Selecione o nome da refeição:
          </label>
          <select
            className="form-select"
            type="text"
            name="meal-name"
            id="meal-name"
            value={mealName}
            onChange={(event) => {
              setMealName(event.target.value);
            }}
            required
          >
            <option selected value="">
              Escolha um nome para sua refeição
            </option>
            <option value="Café da manhã">Café da manhã</option>
            <option value="Lanche">Lanche</option>
            <option value="Almoço">Almoço</option>
            <option value="Jantar">Jantar</option>
            <option value="Ceia">Ceia</option>
          </select>
        </div>
        <fieldset>
          <label className="form-label" htmlFor="date">
            Selecione a data da refeição:{" "}
          </label>
          <input
            className="form-control"
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
          <label className="form-label" htmlFor="date">
            Selecione o horário da refeição:{" "}
          </label>
          <input
            className="form-control"
            type="time"
            name="time"
            id="time"
            value={mealTime}
            onChange={(event) => {
              setMealTime(event.target.value);
            }}
          />
        </fieldset>
        {mealItem.length > 0 ? (
          <div className="list-group">
            <li className="list-group-item list-group-item-action active">
              Lista de alimentos
            </li>
            {mealItem
              .slice()
              .reverse()
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="list-group-item"
                  >{`${item.itemName}: ${item.quantity} ${item.measureUnit}`}</div>
                );
              })}
          </div>
        ) : null}
        {error && (
          <p className="invalid-feedback">
            Você deve registrar pelo menos um alimento
          </p>
        )}
        <AddMealItem onItemSubmit={handleItemSubmit} />
        <button type="submit" className="btn btn-success">
          Cadastrar Refeição
        </button>
      </form>
    </div>
  );
}

export default AddMealForm;
