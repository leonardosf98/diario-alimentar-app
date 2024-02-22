import "./meal-list.css";
function MealList() {
  let meals = [];
  if (meals.length === 0) {
    return <div>Nenhuma refeição registrada</div>;
  }
  return (
    <div>
      <h2>Refeições</h2>
      <ul className="meals-list">{meals}</ul>
    </div>
  );
}

export default MealList;
