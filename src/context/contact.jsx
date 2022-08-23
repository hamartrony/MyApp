import {
    createContext
  } from "react";
  import email from "../images/e-mail.png";
  import git from "../images/git.png";
  import linkedin from "../images/linkedin.png";

  export const ContactContext = createContext();
  
  export const ContactProvider = ({children}) => {
    const contato = [
        { id: 0,
          img: linkedin,
          sub: "Hobbies",
          text: "Cordas, sopro, teclas... Nada melhor que tirar um som para ocupar a mente e os ouvidos!",
        },
        { id: 1,
          img: git,
          sub: "Trabalho",
          text: "Fazer algo novo todo dia. Uma profissao motivadora e instigante.",
        },
        { id: 2,
            img: email,
            sub: "Combustivel",
            text: "Sempre quente, e de preferencia acompanhado de um pão de queijo.",
          },
      ];
    
    return (
        <ContactContext.Provider value={{contato}}>
            {children}
        </ContactContext.Provider>

    );
  };
  
 