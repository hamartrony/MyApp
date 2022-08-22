import { useState } from "react";
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
  const [modulo, setModulo] = useState("home");

  const handlePage = (page) => {
    setModulo(page);
  };

  const empresas = [
    {
      img: "https://media-exp2.licdn.com/dms/image/C4E0BAQH8smZMfETo8A/company-logo_100_100/0/1655211431730?e=1663804800&v=beta&t=2wg7Wt9iw_6OcQYFlyngMpuIpE5M_FfMDnpZaIkaU6w",
      sub: "Vivo (Telefônica Brasil)",
      text: "out de 2016 - jan de 2018 · 1 ano 4 mesesout de 2016 - jan de 2018 · 1 ano 4 meses Curitiba, Paraná, Brasil",
    },
    {
      img: "https://media-exp2.licdn.com/dms/image/C510BAQHCIWoDxQI8ZQ/company-logo_100_100/0/1519891915490?e=1663804800&v=beta&t=KXhYxzuuJWNbxPk5qu6F4f9bYzgiHKjgK6qA2HDwEpc",
      sub: "JL Informatica",
      text: "set de 2011 - dez de 2015 · 4 anos 4 mesesset de 2011 - dez de 2015 · 4 anos 4 meses Goiânia, Goiás, Brasil",
    },
  ];

  const tecs = [];

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
          <button className="sobre" onClick={() => setModulo("sobre")}>
            Mais sobre mim...
          </button>
          <button className="contato" onClick={() => setModulo("contato")}>
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

      <Cards title={"Projetos"} list={tecs} />
      <Cards title={"Sobre"} list={empresas} />
      <Cards title={"Contato"} list={empresas} />
      <Cards title={"Formação"} list={empresas} />

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
