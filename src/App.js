import { useContext } from "react";
import { AppDiv } from "./styles";
// icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
// components
import Cards from "./components/cards";
import { Contato } from "./components/contato/contato";
import { Projetos } from "./components/projetos/projetos";
import { Sobre } from "./components/sobre/sobre";
// images
import { ContactContext } from "./context/contact";
import { ModuleContext } from "./context/modules";
import { SobreContext } from "./context/sobre";
import cssicon from "./images/css.svg";
import djicon from "./images/django.svg";
import dockericon from "./images/docker.svg";
import wallpaper from "./images/fundo.jpeg";
import hamart from "./images/hamartPerfil.png";
import htmlicon from "./images/html5.svg";
import jsicon from "./images/nodejs.svg";
import psqlicon from "./images/pgsql.svg";
import pythonicon from "./images/python.svg";
import reacticon from "./images/react.svg";

function App() {
  const { modulo, handlePage } = useContext(ModuleContext);
  const { sobre } = useContext(SobreContext);
  const { contato } = useContext(ContactContext);

  return (
    <AppDiv modulo={modulo}>
      {/* rotas para Modal */}
      {modulo === "contato" && <Contato handlePage={handlePage} />}
      {modulo === "projetos" && <Projetos handlePage={handlePage} />}
      {modulo === "sobre" && <Sobre handlePage={handlePage} />}
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

      <Cards title={"Projetos"} list={sobre} />
      <Cards title={"Sobre"} list={sobre} />
      <Cards title={"Contato"} list={contato} />
      <Cards title={"Forcação"} list={sobre} />

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
