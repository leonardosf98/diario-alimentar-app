import { useState } from "react";
import { Link } from "react-router-dom";
import addFood from "../../components/add-meal-form/add-meal-form";
function AddFood() {
  const [option, setOption] = useState("solid");
  const [measureUnit, setMeasureUnit] = useState("gramas");
  const [foodName, setFoodName] = useState("");
  const [mealQuantity, setMealQuantity] = useState();

  const handleButtonClick = () => {
    addFood();
  };

  function handleOptionChange() {
    if (option === "solid") {
      setMeasureUnit("ml's");
    } else {
      setMeasureUnit("gramas");
    }
  }

  return (
    <div>
      <Link to={"/createMeal"}>Voltar</Link>
      <form>
        <fieldset>
          <label for="foodName">Digite o nome do alimento: </label>
          <input
            type="text"
            name="foodName"
            id="foodName"
            value={foodName}
            onChange={(event) => {
              setFoodName(event.target.value);
            }}
          />
        </fieldset>
        <fieldset>
          <label for="solid"> Sólido</label>
          <input
            type="radio"
            name="solid"
            id="solid"
            value="solid"
            checked={option === "solid"}
            onChange={(event) => {
              setOption(event.target.value);
              handleOptionChange();
            }}
          />
          <label for="liquid">Líquido</label>
          <input
            type="radio"
            name="liquid"
            id="liquid"
            value="liquid"
            checked={option === "liquid"}
            onChange={(event) => {
              setOption(event.target.value);
              handleOptionChange();
            }}
          />
          <label>Digite a quantidade em {measureUnit}</label>
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
        <Link
          onClick={handleButtonClick}
          to={`/createMeal?foodName=${foodName}&quantity=${mealQuantity}&option=${option}`}
        >
          Cadastrar alimento
        </Link>
      </form>
    </div>
  );
}

export default AddFood;
