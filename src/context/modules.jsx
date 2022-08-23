import {
    createContext,
    useState,
  } from "react";
  

  export const ModuleContext = createContext();
  
  export const ModuleProvider = ({children}) => {
    const [modulo, setModulo] = useState("home")

    const handlePage = (page) => {
        setModulo(page)
    }
    return (
        <ModuleContext.Provider value={{modulo, handlePage}}>
            {children}
        </ModuleContext.Provider>

    );
  };
  
 