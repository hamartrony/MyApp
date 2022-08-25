import {
    createContext
  } from "react";
  import email from "../images/icons/e-mail.png";
  import git from "../images/icons/git.png";
  import linkedin from "../images/icons/linkedin.png";

  export const ContactContext = createContext();
  const linkedinLink = <a href="https://www.linkedin.com/in/hamartrony/" target="blank">
          Linkedin
        </a>
  const gitLink = <a href="https://github.com/hamartrony" target="blank">
    GitHub
    </a>

  const emailLink =  <a href="mailto:hamart23@hotmail.com">
  E-mail
</a>
  
  export const ContactProvider = ({children}) => {
    const contato = [
        { id: 0,
          img: linkedin,
          sub: linkedinLink,
          text: "Acesse meu perfil no Linkedin! De verdade."
        },
        { id: 1,
          img: git,
          sub: gitLink,
          text: "Alguns projetos e estudo. ",
        },
        { id: 2,
            img: email,
            sub: emailLink,
            text: "Me encaminhe um e-mail, estou sempre de olho no spamicons/! ",
          },
      ];
    
    return (
        <ContactContext.Provider value={{contato}}>
            {children}
        </ContactContext.Provider>

    );
  };
  
 