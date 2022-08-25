import {
    createContext
  } from "react";
  import burguerIm from "../images/projetos/bruguer-kenzie.png";
  import photoIm from "../images/projetos/Kenzie-photo1.png";
  import nukIm from "../images/projetos/nukenzie.png";
  import motorIm from "../images/projetos/motorshop.png";
  import cssicon from "../images/icons/css.svg";
  import djicon from "../images/icons/django.svg";
  import dockericon from "../images/icons/docker.svg";
  import htmlicon from "../images/icons/html5.svg";
  import jsicon from "../images/icons/nodejs.svg";
  import psqlicon from "../images/icons/pgsql.svg";
  import pythonicon from "../images/icons/python.svg";
  import reacticon from "../images/icons/react.svg";

  export const ProjectContext = createContext();
  
  export const ProjectProvider = ({children}) => {
    const projetos = [
          {
            id: 1,
            link: "https://nukenzie-iota.vercel.app/",
            git: "https://github.com/hamartrony/contas",
            img: nukIm,
            alt: "nukenzie",
            a: "Nukenzie",
            p: "Precisa de uma mãozinha para controlar as contas? Projeto em React, JS, HTML e CSS.",
            dialog:
            <>
              <p> Aplicação em React, utilizando Components, Props, State e muito suor.</p>
              <p>Com intuito de aprender as bases da ferramenta, manipulando dados, utilizando renderização condicional e é claro, muito CSS pra dar aquele gás.</p>
              <p>O projeto consiste em armazenar, somar, subtrair valores inseridos pelo usuário.</p>
            </>,
            tecs: [htmlicon, cssicon, jsicon, reacticon],
          },
          {
            id: 2,
            link: "https://locationphoto.vercel.app/",
            git: "https://github.com/hamartrony/fotos",
            img: photoIm,
            alt: "location app",
            a: "PhotoLocal",
            p: "Foto estranha com gente esquisita. Pagina em HTML, CSS, JavaScript e nada mais!",
            dialog:
              <>
              <p>Já pensou quais fotos ja foram tiradas no local onde você está?</p>
              <p>Esta pagina utiliza a API do Flickr, para buscar imagens de acordo com a localização do usuário.</p>
              <p>Utilizando HTML, CSS e Javascript, sem esquecer o DOM, que fez um excelente trabalho. A aplicação ajudou no entendimento de requisições à serviços terceiros.</p>
              </>,
            tecs: [htmlicon, cssicon, jsicon],
              
          },
          {
            id: 3,
            link: "https://burguer-ivory.vercel.app/",
            git: "https://github.com/hamartrony/hamburguer",
            img: burguerIm,
            alt: "burger app",
            a: "Burguer",
            p: "Hora do Rango! Mas não se empolgue. Trabalho pensado em e-commerce, com React",
            dialog:
              <>
              <p>Só para passar vontade.</p>
              <p>Este é um exemplo de e-commerce, construido em React.</p>
              <p>Manipulção de dados e reaproveitamento de codigo utilizando Components. Implementação de filtro de Busca e Carrinho de Compras. </p>
              <p>Quase um MacDonalds !!!</p>
              </>,
              tecs: [htmlicon, cssicon, jsicon],
            },
          {
            id: 4,
            link: "https://motorshop-peach.vercel.app",
            git: "https://github.com/hamartrony/react-mui",
            img: motorIm,
            alt: "motor shop",
            a: "MotorShop",
            p: "Carros, React, Material e TypeScript. Um projeto de e-commerce para aproveitar as facilidades do mundo moderno.",
            dialog:
            <>
              <p>Um trabalho em equipe, conectado a uma API Node, com o Front desenvolvido em React, Material UI e Typescript.</p>
              <p>O desafio de uso de uma nova tecnologia, e a surpresa ao descobrir um mundo de possibilidades que facilitam o desenvolvimento.</p>
              
            </>,
              tecs: [htmlicon, cssicon, jsicon, dockericon, psqlicon],
            },
      ];
    
    return (
        <ProjectContext.Provider value={{projetos}}>
            {children}
        </ProjectContext.Provider>

    );
  };
  
 