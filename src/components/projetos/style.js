import styled from "styled-components";

export const ProjetosDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 1800px;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: ${(props) => props.modulo !== "home" && "blur(2px)"};
  -webkit-backdrop-filter: ${(props) =>
    props.modulo !== "home" && "blur(5.5px)"};
  z-index: 1;

  section {
    width: 97%;
    height: auto;
    position: absolute;
    margin-top: 100px;
    z-index: 1;
    flex-wrap: nowrap;
    background: #fff;
    border-radius: 1em;
    font-size: calc(10px + 0.5vmin);
    display: flex;
    flex-direction: column;
  }

  h2 {
    width: 95%;
    height: 35px;
    margin-left: 0;
    font-size: 20px;
    font-weight: 900;
    border-bottom: 1px solid #666666;
    padding: 10px;
  }

  h3 {
    font-weight: 900;
  }

  .cards {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    overflow-y: scroll;
    padding-bottom: 30px;
  }

  .dialog {
    background-color: #fff;
    margin-top: 0;
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    display: ${(props) => (props.num !== 9 ? "inherit" : "none")};
    animation: down-break 2s normal;
    overflow: hidden;
    align-items: center;
    padding-bottom: 30px;
    line-height: 20px;
  }

  .tecs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  .tecs img {
    height: 50px;
    padding: 5px;
  }

  @keyframes down-break {
    from {
      height: 0px;
    }
    to {
      height: 200px;
    }
  }

  .dialog p {
    width: 90%;
    text-align: center;
    font-size: 1em;
  }

  .dialog h3 {
    font-size: 1.5em;
  }

  .links {
    height: 4.5em;
    width: 90%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }

  .links a {
    font-size: 3em;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }

  .links a:hover {
    color: #0b66c2;
  }
  span {
    font-size: 0.5em;
  }

  img:hover {
    filter: brightness(100%);
  }

  .buttonClose {
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 1500px;
    background-color: ${(props) =>
      props.modulo !== "home" && "rgba(0, 0, 0, 0.5)"};
    backdrop-filter: ${(props) => props.modulo !== "home" && "blur(2px)"};
    -webkit-backdrop-filter: ${(props) =>
      props.modulo !== "home" && "blur(5.5px)"};

    section {
      padding: 0;
      max-width: 1000px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-direction: row;
      margin-top: 70px;
    }

    h2 {
      position: fixed;
    }

    .cards {
      width: 60%;
      margin-top: 60px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      overflow-y: unset;
    }

    .dialog {
      background-color: #fff;
      margin-top: 65px;
      width: 40%;
      height: 80%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      display: inherit;
      align-items: center;
      animation: down-break 2s normal;
    }

    .dialog p {
      text-align: justify;
    }

    @keyframes down-break {
      from {
        height: 0px;
      }
      to {
        height: 200px;
      }
    }

    .dialog .textmerda {
      width: 80%;
      font-size: 1em;
    }
  }
`;
