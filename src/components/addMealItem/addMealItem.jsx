import { useState, useEffect } from "react";
import "./addMealItem.css";
import FoodSelector from "../food-selector/food-selector";
function AddMealItem({ onItemSubmit }) {
  const [itemType, setItemType] = useState(0);
  const [itemName, setItemName] = useState();
  const [foodTypes, setFoodTypes] = useState([]);
  const [itemOptions, setItemOptions] = useState([]);
  const [mealQuantity, setMealQuantity] = useState();
  const [error, setError] = useState(false);

  const handleOptionChange = (value) => {
    setItemName(value.label);
  };

  return (
    <div>
      <form>
        <fieldset>
          <label className="form-label" htmlFor="itemName">
            Selecione o nome do alimento:{" "}
            <FoodSelector onChange={handleOptionChange} />
          </label>
        </fieldset>
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
          className="button"
          onClick={(event) => {
            event.preventDefault();
            if (!mealQuantity) {
              setError(true);
              return;
            }
            onItemSubmit(event, [itemName, mealQuantity]);
          }}
        >
          Cadastrar alimento
        </button>
      </form>
    </div>
  );
}

export default AddMealItem;
