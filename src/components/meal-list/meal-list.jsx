import "./meal-list.css";
function MealList() {
  let meals = [];
  if (meals.length === 0) {
    meals = <li>Nenhuma refeição cadastrada</li>;
  } else {
  }
  return (
    <div>
      <h2>Refeições</h2>
      <ul className="meals-list">{meals}</ul>
    </div>
  );
}

export default MealList;
