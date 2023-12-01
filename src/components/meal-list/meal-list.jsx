import "./meal-list.css";

function MealList({ meals }) {
  return (
    <div>
      <h2>Refeições</h2>
      <ul className="meals-list">{meals}</ul>
    </div>
  );
}

export default MealList;
