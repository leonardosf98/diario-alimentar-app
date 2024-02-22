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
          {meals
            .slice()
            .reverse()
            .map((item, index) => {
              const modalId = `exampleModal-${item.id}`;
              const formatedDate = item.mealDate.split("-").reverse().join("/");
              return (
                <div key={index} className="card mt-4">
                  <div
                    class="modal fade"
                    id={modalId}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
                            {item.mealName}
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body d-flex justify-content-center">
                          <ul className="list-group d-flex text-align-center">
                            {item.mealItem.map((item) => {
                              return (
                                <li className="list-group-item">
                                  <p>
                                    {item.itemName} {item.quantity}
                                    {item.measureUnit}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-header">
                    {formatedDate} {item.mealTime}
                  </div>
                  <div className="card-body">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target={`#${modalId}`}
                      className="card-title meal-btn"
                    >
                      {item.mealName}
                    </button>
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
              );
            })}
        </div>
      </div>
    );

  }
  return (
    <div>
      <h2>Refeições</h2>
      <ul className="meals-list">{meals}</ul>
    </div>
  );
}

export default MealList;
