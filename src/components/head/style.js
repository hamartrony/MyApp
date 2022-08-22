import styled from "styled-components";

export const HeadDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  background-color: white;
  box-shadow: 10px 2px 10px #666666;
  align-self: center;
  z-index: 2;

  /* header #####################################*/
  .head {
    width: 100%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .tittle {
    display: flex;
    width: 40%;
  }

  .tittle a {
    font-size: 0.7em;
    text-decoration: none;
    letter-spacing: 0px;
    transform: scale(1, 2.5);
    font-weight: 900;
    color: #000;
  }

  button {
    height: 100%;
    width: 35px;
    font-size: 2em;
    color: #666666;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
  }

  button svg {
    width: 0.8em;
  }

  .icon-button p {
    display: none;
  }

  .icon-button:hover > p {
    color: black;
  }

  .icon-button :first-child:active {
    font-size: 0.8em;
    padding: 0.1em;
  }

  .home p:hover {
    color: black;
  }

  /* Indicador de navegação nos menus */
  #home {
    border-bottom: ${(props) =>
      props.modulo === "home" ? ".15em  solid black" : "none"};
    color: ${(props) => props.modulo === "home" && "#000"};
  }
  #home p {
    color: ${(props) => props.modulo === "home" && "#000"};
  }

  #proj {
    border-bottom: ${(props) =>
      props.modulo === "projetos" ? ".15em  solid black" : "none"};
    color: ${(props) => props.modulo === "projetos" && "#000"};
  }
  #proj p {
    color: ${(props) => props.modulo === "projetos" && "#000"};
  }

  #sobre {
    border-bottom: ${(props) =>
      props.modulo === "sobre" ? ".15em  solid black" : "none"};
    color: ${(props) => props.modulo === "sobre" && "#000"};
  }

  #sobre p {
    color: ${(props) => props.modulo === "sobre" && "#000"};
  }

  #cont {
    border-bottom: ${(props) =>
      props.modulo === "contato" ? ".15em  solid black" : "none"};
    color: ${(props) => props.modulo === "contato" && "#000"};
  }
  #cont p {
    color: ${(props) => props.modulo === "contato" && "#000"};
  }

  @media only screen and (min-width: 770px) {
    padding: 0;
    align-items: center;
    justify-content: center;
    .head {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1000px;
      font-size: 0.8em;
    }

    .tittle {
      display: flex;
      width: 50%;
    }

    .tittle a {
      font-size: 2em;
      transform: scale(1, 1.5);
    }

    .icon-button:hover {
      color: #000;
    }

    .icon-button p {
      display: inherit;
      font-size: 0.5em;
      margin: 0;
    }
  }

  @media only screen and (min-width: 1900px) {
    .head {
      max-width: 1000px;
    }
  }
`;
