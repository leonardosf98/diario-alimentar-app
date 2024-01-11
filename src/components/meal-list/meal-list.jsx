import { useState, useEffect } from "react";
import "./meal-list.css";
import { Link } from "react-router-dom";

function MealList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let fullObject = JSON.parse(localStorage.getItem("meals"));
    setMeals(fullObject);
  }, []);

  const deleteMeal = (id) => {
    const removedItem = meals.filter((item) => {
      return item.id !== id;
    });
    setMeals(removedItem);
    localStorage.setItem("meals", JSON.stringify(removedItem));
  };

  if (meals.length === 0) {
    return <div className="no-meals">Nenhuma refeição registrada</div>;
  } else {
    return (
      <div>
        <h2 className="meals-title">Refeições</h2>
        <div className="meals-list">
          {meals.map((item, index) => {
            const formatedDate = item.mealDate.split("-").reverse().join("/");
            return (
              <div key={index} className="card mt-4">
                <div className="card-header">
                  {formatedDate} {item.mealTime}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.mealName}</h5>
                  <p className="card-text"></p>
                  <Link className="btn btn-primary" to={`/edit/${item.id}`}>
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteMeal(item.id)}
                    className="btn btn-danger ms-2"
                  >
                    Excluir
                  </button>
                </div>
              </div>
              /* //         <li key={item.id} className="list-group-item">
      //           <h5 className="mb-1">{item.mealName}</h5>
      //           <div className="d-flex w-100 justify-content-between">
      //             <small>{item.mealTime}</small>
      //             <small>{formatedDate}</small>
      //           </div>
      //           <div className="buttons-container">
      //             <Link to={`/edit/${item.id}`}>Editar</Link>
      //             <button
      //               onClick={() => deleteMeal(item.id)}
      //               className="delete-btn"
      //             >
      //               Excluir
      //             </button> */
            );
          })}
        </div>
      </div>
    );
  }
}

export default MealList;
