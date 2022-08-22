import styled from "styled-components";

export const CardsProjDiv = styled.div`
  width: 100vw;
  height: 250px;
  display: flex;
  justify-content: center;

  .attr {
    margin-top: 1em;
    width: 10.7em;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-around;
  }

  .attr p {
    font-size: 1em;
    color: #000;
    font-weight: 400;
    width: 8em;
    text-align: center;
  }

  .txt2 {
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

  .attr button {
    border: none;
    margin-top: 8px;
    width: 100px;
    height: 30px;
    background-color: #0b66c2;
    border-radius: 7px;
    color: #fff;
    margin-left: 0.6em;
  }

  .attr button:hover {
    filter: brightness(130%);
  }

  .dialog {
    /* position: absolute; */
    /* margin-top: 20em; */
    /* width: 250px; */
    /* height: 350px; */
    /* display: ${(props) =>
      props.saibamais === false ? "none" : "inherit"}; */
    /* display: none; */
    /* z-index: 2; */
  }

  img {
    height: 8em;
    width: 10em;
    filter: brightness(70%);
    border-radius: 10px;
  }

  img:hover {
    filter: brightness(100%);
  }

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 17em;
    height: 20em;
    /* background-color: ${(props) =>
      props.modulo !== "home" && "rgba(0, 0, 0, 0.5)"};
    backdrop-filter: ${(props) => props.modulo !== "home" && "blur(2px)"};
    -webkit-backdrop-filter: ${(props) =>
      props.modulo !== "home" && "blur(5.5px)"}; */

    z-index: 1;

    img {
      height: 10em;
      width: 15em;
    }

    .attr {
      margin-top: 1em;
      width: 20em;
      height: 20em;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: space-around;
    }
  }
`;
