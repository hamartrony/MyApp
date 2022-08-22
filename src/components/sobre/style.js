import styled from "styled-components";

export const SobreDiv = styled.div`
  width: 90vw;
  height: 60vh;
  position: absolute;
  margin-top: 80px;

  align-items: center;
  padding: 0px 10px 0px 10px;
  flex-wrap: nowrap;
  background: rgba(101, 118, 140, 0.8);
  box-shadow: 0 8px 32px 0 rgba(68, 80, 95, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(51, 153, 255, 0.18);
  font-size: calc(10px + 0.5vmin);

  h1 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 10px;
    text-align: justify;
    padding: 5px;
    color: white;
  }

  img {
    height: 10em;
    width: 8em;
    float: right;
    border-radius: 20%;
    padding: 5px;
  }

  .text {
    padding: 0 1em;
  }

  @media only screen and (min-width: 800px) {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    max-width: 800px;

    .text {
      padding: 1em 2em;
    }

    button {
      font-size: calc(9px + 0.4vmin);
    }
  }
`;
