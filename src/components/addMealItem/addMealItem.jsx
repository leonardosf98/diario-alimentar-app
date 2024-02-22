import { useState } from "react";
import "./addMealItem.css";
import FoodSelector from "../food-selector/food-selector";
function AddMealItem({ onItemSubmit }) {
  const [measureUnit, setMeasureUnit] = useState();
  const [itemName, setItemName] = useState();
  const [mealQuantity, setMealQuantity] = useState();
  const [error, setError] = useState(false);

  const handleOptionChange = (value) => {
    setItemName(value.label);
  };

  return (
    <div className="container">
      <fieldset>
        <label className="form-label" htmlFor="itemName">
          Selecione o nome do alimento:{" "}
          <FoodSelector onChange={handleOptionChange} />
        </label>
      </fieldset>
      <select
        id="measurementType"
        className="form-select"
        value={measureUnit}
        onChange={(e) => setMeasureUnit(e.target.value)}
      >
        <option value="" selected>
          Selecione uma opção
        </option>
        <option value="gramas">Sólido</option>
        <option value="ml's">Líquido</option>
      </select>
      <fieldset className="meal-quantity-container">
        <label className="form-label">
          {itemName !== undefined
            ? `Digite a quantidade de ${itemName}`
            : "Selecione um alimento"}
        </label>
        <input
          className="form-control"
          type="number"
          name="quantity"
          id="quantity"
          value={mealQuantity}
          onChange={(event) => {
            setMealQuantity(event.target.value);
            {
              mealQuantity <= 0 ? setError(true) : setError(false);
            }
          }}
        />
        {error && (
          <div className="invalid-feedback">Digite um valor válido</div>
        )}
      </fieldset>

      <button
        className="btn btn-primary"
        id="submit-btn"
        onClick={(event) => {
          event.preventDefault();
          // if (measureUnit === "" || itemName === undefined) {
          //   document.getElementById("submit-btn").className += "disabled";
          //   return;
          // }
          onItemSubmit(event, [itemName, mealQuantity, measureUnit]);
        }}
      >
        Cadastrar alimento
      </button>
    </div>
  );
}

export default AddMealItem;
