import styled from "styled-components";

export const ProjetosDiv = styled.div`
  position: absolute;
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;

  .all {
    width: 98%;
    height: auto;
    position: absolute;
    margin-top: 4.8em;
    z-index: 1;
    flex-wrap: nowrap;
    background: #fff;
    border-radius: 1em;
    font-size: calc(10px + 0.5vmin);
    display: flex;
    flex-direction: column;
  }

  .text {
    width: 100%;
    height: 2.5em;
    margin-left: 0;
    align-items: center;
    border-bottom: 1px solid #666666;
  }

  .tittle {
    font-size: 1.5em;
    margin-bottom: 10px;

    color: #000;
  }

  .icons {
    height: 370px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    overflow-y: scroll;
  }

  /* .attr p {
    font-size: 1em;
    color: #000;
    font-weight: 400;
  } */

  /* .txt2 {
    font-weight: 600;
    color: #0b66c2;
    font-size: 1.2em;
    margin-left: 0.6em;
    filter: brightness(70%);
    text-decoration: none;
  }

  .txt2:hover {
    font-weight: 900;
    filter: brightness(130%);
  }

  .attr button:hover {
    filter: brightness(130%);
  } */

  .dialog {
    background-color: #fff;
    margin-top: -6em;
    width: 100%;
    height: 292px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    display: ${(props) => (props.num !== 9 ? "inherit" : "none")};
    /* display: in; */
    align-items: center;
    z-index: 2;
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

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 150vh;
    background-color: #f3f2ef;
    /* background-color: ${(props) =>
      props.modulo !== "home" && "rgba(0, 0, 0, 0.5)"};
    backdrop-filter: ${(props) => props.modulo !== "home" && "blur(2px)"};
    -webkit-backdrop-filter: ${(props) =>
      props.modulo !== "home" && "blur(5.5px)"}; */

    z-index: 1;

    .all {
      padding: 0;
      flex-direction: column;
      align-items: flex-start;
      flex-direction: row;
      /* justify-content: center; */
      width: 100%;
      height: 85vh;
      max-width: 1000px;
    }

    .all > .text {
      position: absolute;
    }

    .dialog {
      background-color: #fff;
      margin-top: 6em;
      width: 80%;
      height: 80%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      /* display: ${(props) => (props.num !== 9 ? "inherit" : "none")}; */
      display: inherit;
      align-items: center;
      z-index: 2;
    }

    .dialog .textmerda {
      width: 80%;
      font-size: 1em;
    }

    .icons {
      height: 600px;
      margin-top: 5em;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      /* justify-content: space-between; */
      width: 100%;
      overflow-y: inherit;
    }
  }

  @media only screen and (min-width: 1900px) {
    max-width: 1500px;
    height: 100vh;

    .all {
      max-width: 1500px;
      height: 100vh;
    }
  }
`;
