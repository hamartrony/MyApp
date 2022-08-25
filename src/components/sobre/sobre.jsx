import { useState } from "react";
import { SobreDiv } from "./style";
import insta from "../../images/icons/icons8-instagram-96.png";
import linkd from "../../images/icons/icons8-linkedin-96.png";
import hamart from "../../images/icons/hamartPerfil.png";
import mail from "../../images/icons/e-mail.png";
import ButtonClose from "../buttonClose/button-close";

export const Sobre = () => {


  return (
    <SobreDiv>
      
      <section>
        <h1>Sobre !</h1>
        <div className="content">

        <img src={hamart} alt="Foto Hamart"></img>
        <p>
          Um curso de Montagem e Manutenção de Computadores me abriu portas para
          o mundo da tecnologia, onde atuei por 5 anos como suporte técnico.
        </p>
        <p>Cursando Análise de Sistema e Desenvolvimento Web,
          descobri um mundo de possibilidades entre varias tecnologias envolvidas no desenvolvimento
          com Javascript e Python. 
        </p>
        <p>
          Também gosto de música (saxofone, piano, violão) e qualquer coisa que envolva tecnologia...
        </p>
        <p>
          Hoje, cada projeto é uma conquista que vale
          cada gota de café.
        </p>
        </div>
      <ButtonClose/>
      </section>
    </SobreDiv>
  );
};
