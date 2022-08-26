import styled from "styled-components";

export const SobreDiv = styled.div`
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
    height: 450px;
    position: absolute;
    margin-top: 100px;
    z-index: 1;
    flex-wrap: nowrap;
    background: #fff;
    border-radius: 1em;
    font-size: calc(10px + 0.5vmin);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .content {
    padding: 10px;
    line-height: 17px;
  }

  h1 {
    font-size: 25px;
    font-weight: 900;
    margin-left: 10px;
    color: black;
    margin-top: 20px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 10px;
    text-align: justify;
    padding: 5px;
    color: black;
  }

  img {
    height: 140px;
    width: 100px;
    float: left;
    border-radius: 20%;
  }

  .buttonClose {
    align-self: flex-end;
  }

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1150px;
    background-color: ${(props) =>
      props.modulo !== "home" && "rgba(0, 0, 0, 0.5)"};
    backdrop-filter: ${(props) => props.modulo !== "home" && "blur(2px)"};
    -webkit-backdrop-filter: ${(props) =>
      props.modulo !== "home" && "blur(5.5px)"};

    section {
      padding: 0;
      flex-direction: column;
      align-items: flex-start;
      width: 500px;
      height: 30em;
      max-width: 800px;
      position: inherit;
    }

    .text {
      padding: 1em 2em;
    }

    button {
      font-size: calc(9px + 0.4vmin);
    }
  }
`;
