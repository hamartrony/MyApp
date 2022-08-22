import { useState } from "react";
import { ContatoDiv, ProjetosDiv } from "./style";
import insta from "../../images/icons8-instagram-96.png";
import linkd from "../../images/linkedin.png";
import git from "../../images/git.png";
import mail from "../../images/e-mail.png";
import ButtonClose from "../buttonClose/button-close";
import nukenzie from "../../images/projetos/nukenzie.png";
import photo from "../../images/projetos/Kenzie-photo1.png";
import burguer from "../../images/projetos/bruguer-kenzie.png";
import { CardProjects } from "../cardProjects/cardProject";
import { AiFillGithub } from "react-icons/ai";
import { HiLink } from "react-icons/hi";

export const Projetos = ({ handleClick, color, modulo, handlePage }) => {
  let projetos = [
    {
      id: 1,
      link: "https://nukenzie-iota.vercel.app/",
      git: "https://github.com/hamartrony/contas",
      img: nukenzie,
      alt: "nukenzie",
      a: "Nukenzie",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      link: "https://locationphoto.vercel.app/",
      git: "https://github.com/hamartrony/fotos",
      img: photo,
      alt: "location app",
      a: "PhotoLocal",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      link: "https://burguer-ivory.vercel.app/",
      git: "https://github.com/hamartrony/hamburguer",
      img: burguer,
      alt: "burger app",
      a: "KenzieBurguer",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      link: "https://burguer-ivory.vercel.app/",
      git: "https://github.com/hamartrony/hamburguer",
      img: burguer,
      alt: "burger app",
      a: "KenzieBurguer",
      p: "Aplicação em react loren ipsum doesl dejsdh ksdjahs ekjsk dhh ",
      dialog:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const [saibamais, setSaiba] = useState(false);
  const [num, setNum] = useState(9);
  const [text, setText] = useState([]);

  function handleSaiba(index) {
    setText([
      projetos[index - 1].dialog,
      projetos[index - 1].link,
      projetos[index - 1].git,
      projetos[index - 1].a,
    ]);

    setSaiba(true);

    if (num === index) {
      setSaiba(false);
      setNum(9);
    } else {
      setNum(index);
    }
  }

  return (
    <ProjetosDiv num={num} setNum={setNum}>
      <div className="all">
        <div className="text">
          <p className="tittle">Projetos!</p>
        </div>

        <div className="icons">
          {projetos.map((item, index) => (
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
        {/* {num !== "" &&  ( */}
        <div className="dialog">
          {num === 9 ? (
            <>
              <h3>Algo sobre</h3>
              <p className="textmerda">
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32.
              </p>
            </>
          ) : (
            <>
              <h3>{text[3]}</h3>
              <p>{text[0]}</p>
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
        </div>
        {/* )} */}
      </div>
    </ProjetosDiv>
  );
};
