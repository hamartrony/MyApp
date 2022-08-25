import {
    createContext
  } from "react";
  import kenzie from "../images/icons/kenzie.png";
  import uninter from "../images/icons/uninter.png";
 
  export const FormacaoContext = createContext();
  
  export const FormacaoProvider = ({children}) => {
    const formacao = [
        { id: 0,
          img: kenzie,
          sub: "Kenzie Academy Brasil",
          text: "Curso FullStack voltado ao mercado de desenvolvimento web.",
        },
        { id: 1,
          img: uninter,
          sub: "Uninter",
          text: "Análise e Desenvolvimento de Sistemas. ",
        },
      ];
    
    return (
        <FormacaoContext.Provider value={{formacao}}>
            {children}
        </FormacaoContext.Provider>

    );
  };
  
 