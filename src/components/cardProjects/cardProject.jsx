import { useState } from "react";
import { CardsProjDiv, ContatoDiv, ProjetosDiv } from "./style";
import insta from "../../images/icons8-instagram-96.png";
import linkd from "../../images/linkedin.png";
import git from "../../images/git.png";
import mail from "../../images/e-mail.png";
import ButtonClose from "../buttonClose/button-close";
import nukenzie from "../../images/projetos/nukenzie.png";
import photo from "../../images/projetos/Kenzie-photo1.png";
import burguer from "../../images/projetos/bruguer-kenzie.png";

export const CardProjects = ({ handleSaiba, ...rest }) => {
  return (
    <CardsProjDiv>
      <div className="attr">
        <a href={rest.link} target="blank">
          <img src={rest.img} alt={rest.alt}></img>
        </a>
        <a className="txt2" href={rest.link} target="blank">
          {rest.a}
        </a>
        <p className="txt1">{rest.p}</p>

        <button className={rest.id} onClick={() => handleSaiba(rest.id)}>
          Saiba Mais
        </button>
      </div>
    </CardsProjDiv>
  );
};
