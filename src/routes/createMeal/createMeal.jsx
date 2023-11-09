import Modal from "../../components/modal/modal";
import { useNavigate } from "react-router-dom";
function CreateMeal() {
  const navigate = useNavigate();
  return (
    <Modal
      onSubmit={(event) => {
        navigate("/");
      }}
    ></Modal>
  );
}
/*
Definir estados para cada campo
Passar para onSubmit como objeto os estados
Criar um estadoNovo de lista para ir mostrando
*/
export default CreateMeal;
