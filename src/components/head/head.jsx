import { HeadDiv } from "./style";
import { AiFillHome } from "react-icons/ai";
import { BsFillBagDashFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { useContext } from "react";
import { ModuleContext } from "../../context/modules";
import { Contato } from "../contato/contato";
import { Projetos } from "../projetos/projetos";
import { Sobre } from "../sobre/sobre";

export const Head = () => {
  const hamart = "<h1>Hamart Rony</h1>";
  const { modulo, handlePage } = useContext(ModuleContext);

  return (
    <>
    <HeadDiv modulo={modulo}>
      <div className="head">
        <div className="tittle">
          <a href="https://www.linkedin.com/in/hamartrony/" target="blank">
            {hamart}
          </a>
        </div>

        <button className="icon-button" id="home" onClick={() => handlePage("home")}>
          <AiFillHome />
          <p>Início</p>
        </button>

        <button onClick={() => handlePage("projetos")} id="proj" className="icon-button">
          <BsFillBagDashFill />

          <p>Projetos</p>
        </button>

        <button onClick={() => handlePage("sobre")} id="sobre" className="icon-button">
          <FaUserAlt />
          <p>Sobre</p>
        </button>

        <button
          onClick={() => handlePage("contato")}
          id="cont"
          className="icon-button"
        >
          <BsFillChatRightDotsFill />
          <p>Contato</p>
        </button>
      </div>
    </HeadDiv>
    {modulo === "contato" && <Contato handlePage={handlePage} />}
    {modulo === "projetos" && <Projetos handlePage={handlePage} />}
    {modulo === "sobre" && <Sobre handlePage={handlePage} />}
    </>
  );
};
