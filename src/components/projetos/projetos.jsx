import { useState } from "react";
import { ContatoDiv, ProjetosDiv } from "./style";
import insta from "../../images/icons/icons8-instagram-96.png";
import linkd from "../../images/icons/linkedin.png";
import git from "../../images/icons/git.png";
import mail from "../../images/icons/e-mail.png";
import ButtonClose from "../buttonClose/button-close";
import nukenzie from "../../images/projetos/nukenzie.png";
import photo from "../../images/projetos/Kenzie-photo1.png";
import burguer from "../../images/projetos/bruguer-kenzie.png";
import { CardProjects } from "../cardProjects/cardProject";
import { AiFillGithub } from "react-icons/ai";
import { HiLink } from "react-icons/hi";
import { useContext } from "react";
import { ProjectContext } from "../../context/projetos";

export const Projetos = ({ handleClick, color, modulo, handlePage }) => {
  const { projetos } = useContext(ProjectContext);

  const [saibamais, setSaiba] = useState(false);
  const [num, setNum] = useState(9);
  const [text, setText] = useState([]);

  function handleSaiba(index) {
    setText([
      projetos[index - 1].dialog,
      projetos[index - 1].link,
      projetos[index - 1].git,
      projetos[index - 1].a,
      projetos[index - 1].tecs,
      projetos[index - 1].key
    ]);

    console.log( projetos[index - 1].key)

    setSaiba(true);

    if (num === index) {
      setSaiba(false);
      setNum(9);
    } else {
      setNum(index);
    }
  }



  return (
    <ProjetosDiv num={num} setNum={setNum} saibamais={saibamais} >
      <section>
        
          <h2>Projetos!</h2>
        

        <div className="cards">
          {projetos.map((item) => (
            <CardProjects
              handleSaiba={handleSaiba}
              link={item.link}
              img={item.img}
              alt={item.alt}
              a={item.a}
              p={item.p}
              dialog={item.dialog}
              key={item.id}
              id={item.id}
              num={num}
            ></CardProjects>
          ))}
        </div>
        <div className="dialog">
          {num === 9 ? (
            <>
              <h3>Alguns projetos...</h3>
              <div className="textos">
                <>
                  <p>
                    Desde os famosos HTML e CSS, ate as mais atuais tecnologias como React, Express, Node e Django.
                  </p>
                  <p>Alguns projetos criados, utilizando diversas soluções e tecnologias.</p>
                  <p>A começar deste proprio site, que também está disponivel no meu GitHub</p>
                </>
                <div className="links">
                <a href="https://github.com/hamartrony/MyApp" target="blank">
                  <AiFillGithub />
                  <span>Abrir no GitHub</span>
                </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <h3>{text[3]}</h3>
              <>{text[0]}</>
              <div className="tecs">
                {text[4].map((item, index) => (
                  
                  <img src={item} alt="icon tecnologia" key={index}></img>

                ))}
            

              </div>
              <div className="links">
                <a href={text[2]} target="blank">
                  <AiFillGithub />
                  <span>Abrir no GitHub</span>
                </a>
                <a href={text[1]} target="blank">
                  <HiLink />
                  <span>Abrir o site</span>
                </a>
              </div>
            </>
          )}
          <ButtonClose/>
        </div>
        
      </section>
    </ProjetosDiv>
  );
};
