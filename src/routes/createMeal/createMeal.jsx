import AddMealForm from "../../components/add-meal-form/add-meal-form";
import { useNavigate } from "react-router-dom";
function CreateMeal() {
  const navigate = useNavigate();
  return (
    <AddMealForm
      onSubmit={(event) => {
        console.log(event);
        navigate("/");
      }}
    ></AddMealForm>
  );
}

export default CreateMeal;
