import styled from "styled-components";

export const ContatoDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  .all {
    width: 98%;
    height: 400px;
    position: absolute;
    margin-top: 5em;
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
    height: 15%;
    margin: 0;
    align-items: flex-start;
    border-bottom: 1px solid #666666;
  }

  .tittle {
    font-size: 1.5em;
    margin-bottom: 10px;
    margin-left: 1em;
    color: #000;
  }

  .icons {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }

  .attr {
    margin: 0.5em;
  }

  .attr p {
    font-size: 1.3em;
    margin-left: 6em;
    color: #000;
    font-weight: 800;
  }

  .txt2 {
    font-weight: 600;
    color: #0b66c2;
    font-size: 1.2em;
    margin-left: 1.4em;
    filter: brightness(70%);
    text-decoration: none;
  }

  .txt2:hover {
    font-weight: 900;
    filter: brightness(130%);
  }

  img {
    position: relative;
    float: left;
    height: 5em;
    width: 5em;
    margin-left: 1.2em;
    filter: brightness(70%);
  }

  img:hover {
    filter: brightness(130%);
  }

  @media only screen and (min-width: 800px) {
    /* padding: 0; */
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 1000vh;
    background-color: ${(props) =>
      props.modulo !== "home" && "rgba(0, 0, 0, 0.5)"};
    backdrop-filter: ${(props) => props.modulo !== "home" && "blur(2px)"};
    -webkit-backdrop-filter: ${(props) =>
      props.modulo !== "home" && "blur(5.5px)"};

    z-index: 1;

    .all {
      padding: 0;
      flex-direction: column;
      align-items: flex-start;
      /* justify-content: center; */
      width: 50%;
      height: 30em;
      max-width: 800px;
    }

    .icons {
      height: 80%;
      align-content: space-between;
    }
  }
`;
