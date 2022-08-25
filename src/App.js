import { useContext } from "react";
import { AppDiv } from "./styles";
// icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
// components
import Cards from "./components/cards";
// images
import ProjHome from "./components/projhome";
import { ContactContext } from "./context/contact";
import { FormacaoContext } from "./context/formação";
import { ModuleContext } from "./context/modules";
import { ProjectContext } from "./context/projetos";
import { SobreContext } from "./context/sobre";
import cssicon from "./images/icons/css.svg";
import djicon from "./images/icons/django.svg";
import dockericon from "./images/icons/docker.svg";
import wallpaper from "./images/icons/fundo.jpeg";
import hamart from "./images/icons/hamartPerfil.png";
import htmlicon from "./images/icons/html5.svg";
import jsicon from "./images/icons/nodejs.svg";
import psqlicon from "./images/icons/pgsql.svg";
import pythonicon from "./images/icons/python.svg";
import reacticon from "./images/icons/react.svg";

function App() {
  const { modulo, handlePage } = useContext(ModuleContext);
  const { sobre } = useContext(SobreContext);
  const { contato } = useContext(ContactContext);
  const { formacao } = useContext(FormacaoContext);
  const { projetos } = useContext(ProjectContext);

  return (
    <AppDiv modulo={modulo}>
      {modulo === "home" && <></>}
      <section>
        <div className="imagens">
          <img src={hamart} alt="hamart imagem" className="profile-image"></img>
          <img src={wallpaper} alt="Wallpaper"></img>
        </div>
        <div className="text">
          <h2>Hamart Rony</h2>
          <h3>
            Desenvolvedor Fullstack | JavaScript | React | Node | Python |
            Django | Docker | Postgres
          </h3>
          <p>Curitiba, Paraná, Brasil</p>
          <p className="font2">Informaçoes de contato</p>
        </div>
        <div className="links">
          <button className="sobre" onClick={() => handlePage("sobre")}>
            Mais sobre mim...
          </button>
          <button className="contato" onClick={() => handlePage("contato")}>
            "Contatos Hamart"
          </button>
          <div className="descr">
            <h2>Tecnologias</h2>
            <div className="tec-icons">
              <img
                src={reacticon}
                alt="React Icon"
                className="react-icon"
              ></img>

              <img src={htmlicon} alt="html Icon" className="html-icon"></img>

              <img src={cssicon} alt="CSS Icon" className="css-icon"></img>
              <img src={jsicon} alt="Javascript Icon" className="js-icon"></img>
              <img
                src={dockericon}
                alt="Docker Icon"
                className="docker-icon"
              ></img>
              <img
                src={pythonicon}
                alt="Python Icon"
                className="python-icon"
              ></img>
              <img
                src={psqlicon}
                alt="Python Icon"
                className="postgres-icon"
              ></img>
              <img src={djicon} alt="Django Icon" className="dj-icon"></img>
            </div>
          </div>
        </div>
      </section>

      <ProjHome tittleStr={"Projetos"} list={projetos} />
      <Cards tittleStr={"Sobre"} list={sobre} />
      <Cards tittleStr={"Contato"} list={contato} />
      <Cards tittleStr={"Formação"} list={formacao} />
      <footer>
        <h2>Hamart Rony</h2>
        <p>Desenvolvimento Web</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/hamartrony/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/hamartrony" target="blank">
            <AiFillGithub />
          </a>
          <a href="mailto:hamart23@hotmail.com">
            <MdMarkEmailRead />
          </a>
        </div>
      </footer>
    </AppDiv>
  );
}

export default App;
