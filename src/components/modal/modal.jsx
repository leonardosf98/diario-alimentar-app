function modal() {
  let solidInput = document.getElementsByName("solid");
  let liquidInput = document.getElementsByName("liquid");
  let measureUnit = "gramas";
  function defineUnit() {
    if (liquidInput === on) {
      measureUnit = "ml";
    } else {
      measureUnit = "gramas";
    }
  }
  return (
    <div className="modal">
      <fieldset>
        <legend>Digite o nome da refeição</legend>
        <input type="text" name="" id="" />
      </fieldset>
      <fieldset>
        <legend>Selecione a data da refeição</legend>
        <input type="date" />
      </fieldset>
      <fieldset>
        <label> Sólido</label>
        <input type="radio" name="solid" id="" onChange={defineUnit} />
        <label>Líquido</label>
        <input type="radio" name="liquid" id="" onChange={defineUnit} />
        <label>Digite a quantidade em {measureUnit}</label>
        <input type="number" />
      </fieldset>
    </div>
  );
}

export default Modal;
