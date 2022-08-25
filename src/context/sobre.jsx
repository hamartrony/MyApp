import {
    createContext
  } from "react";
  import music from "../images/icons/music.png";
  import code from "../images/icons/code.png";
  import drink from "../images/icons/drink.png";

  export const SobreContext = createContext();
  
  export const SobreProvider = ({children}) => {
    const sobre = [
        { id: 0,
          img: music,
          sub: "Hobbies",
          text: "Cordas, sopro, teclas... Nada melhor que tirar um som para ocupar a mente e os ouvidos!",
        },
        { id: 1,
          img: code,
          sub: "Trabalho",
          text: "Fazer algo novo todo dia. Uma profissao motivadora e instigante.",
        },
        { id: 2,
            img: drink,
            sub: "Combustivel",
            text: "Sempre quente, e de preferencia acompanhado de um pão de queijo.",
          },
      ];
    
    return (
        <SobreContext.Provider value={{sobre}}>
            {children}
        </SobreContext.Provider>

    );
  };
  
 