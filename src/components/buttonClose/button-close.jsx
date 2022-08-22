import { ButtonClose } from "./style";

function Close({ handlePage, page }) {
  return (
    <ButtonClose>
      <button onClick={() => handlePage("home")}>Voltar</button>
    </ButtonClose>
  );
}

export default Close;
