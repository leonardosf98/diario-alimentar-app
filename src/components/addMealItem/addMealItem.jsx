import { useState } from "react";

function AddMealItem({ onItemSubmit }) {
  const [option, setOption] = useState("solid");
  const [measureUnit, setMeasureUnit] = useState("gramas");
  const [itemType, setItemType] = useState("");
  const [itemName, setItemName] = useState("Feijão");
  const [itemOptions, setItemOptions] = useState([
    "Feijão",
    "Ervilha",
    "Lentilha",
    "Grão de bico",
  ]);
  const [mealQuantity, setMealQuantity] = useState();

  const handleOptionChange = () => {
    if (option === "solid") {
      setMeasureUnit("ml's");
    } else {
      setMeasureUnit("gramas");
    }
  };
  const handleTypeChange = (event) => {
    const type = event.target.value * 1;
    setItemType(type);
    switch (type) {
      case 1:
        setItemOptions(["Feijão", "Ervilha", "Lentilha", "Grão de bico"]);
        break;
      case 2:
        setItemOptions(["Arroz", "Aveia", "Milho", "Brócolis"]);
        break;
      case 3:
        setItemOptions(["Maçã", "Banana", "Mamão", "Uva"]);
        break;
      case 4:
        setItemOptions(["Alface", "Tomate", "Cenoura", "Brócolis"]);
        break;
    }
  };
  const onSubmit = () => {
    return [itemName, measureUnit, mealQuantity];
  };
  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="itemType">Selecione o tipo de alimento: </label>
          <select
            name="itemType"
            id="itemType"
            value={itemType}
            onChange={(event) => {
              handleTypeChange(event);
            }}
          >
            <option value="1">Leguminosas</option>
            <option value="2">Cereais</option>
            <option value="3">Frutas</option>
            <option value="4">Hortaliças</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="itemName">Selecione o nome do alimento: </label>
          <select
            name="itemName"
            id="itemName"
            value={itemName}
            onChange={(event) => {
              setItemName(event.target.value);
            }}
          >
            {itemOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="solid"> Sólido</label>
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
          <label htmlFor="liquid">Líquido</label>
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
        <button
          onClick={(event) => {
            event.preventDefault();
            const newItem = onSubmit();
            onItemSubmit(event, newItem);
          }}
        >
          Cadastrar alimento
        </button>
      </form>
    </div>
  );
}

export default AddMealItem;
