import styled from "styled-components";

export const ButtonClose = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: end;
  padding: 10px;

  button {
    background-color: #0b66c2;
    border-radius: 10px;
    font-family: "Roboto Mono", monospace;
    font-size: calc(10px + 0.5vmin);
    color: white;
    border: 1px white solid;
    min-width: 70px;
    min-height: 30px;
  }

  button:hover {
    cursor: pointer;
    background-color: #cccccc;
    color: black;
    border: 1px black solid;
    font-weight: 600;
  }
`;
