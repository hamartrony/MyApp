import { useContext } from "react";
import { ModuleContext } from "../../context/modules";
import { ButtonClose } from "./style";

function Close() {
  const { handlePage } = useContext(ModuleContext);

  return (
    <ButtonClose className="buttonClose">
      <button onClick={() => handlePage("home")}>Home</button>
    </ButtonClose>
  );
}

export default Close;
