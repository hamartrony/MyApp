import { useState } from "react";
import { SobreDiv } from "./style";
import insta from "../../images/icons8-instagram-96.png";
import linkd from "../../images/icons8-linkedin-96.png";
import hamart from "../../images/hamartPerfil.png";
import mail from "../../images/e-mail.png";
import ButtonClose from "../buttonClose/button-close";

export const Sobre = ({ handleClick, color, modulo, handlePage }) => {
  // const [buttonColor, setButton] = useState("white")

  // const changeButton = ()=>{
  //   buttonColor === 'black' ? setButton('white') : setButton("black")
  // }

  return (
    <SobreDiv>
      <ButtonClose handlePage={handlePage} />
      <div className="text">
        <h1>Alguma coisa!</h1>
        <img src={hamart} alt="Foto Hamart"></img>
        <p>
          Um curso de Montagem e Manutenção de Computadores me abriu portas para
          o mundo da tecnologia, onde atuei por 5 anos, com experiência em
          suporte remoto e presencial.
        </p>
        <p>
          Hoje na área de desenvolvimento, cada projeto é uma conquista que vale
          cada gota de café.
        </p>
        <p>
          Também gosto de música (saxofonista, piano, violão) e passeios com a
          família.
        </p>
        {/* <p>
          Atualmente cursando Desenvolvimento Web, consegui entender como muita
          coisa funciona, e como sempre, paciência e persistência são
          necessárias para fazer coisas incríveis.
        </p>  */}
      </div>
    </SobreDiv>
  );
};
