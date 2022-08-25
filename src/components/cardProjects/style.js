import styled from "styled-components";

export const CardsProjDiv = styled.div`
  width: 140px;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 10px 5px 0 5px;

  .attr {
    width: 140px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-around;
  }

  img {
    height: 90px;
    width: 140px;
    filter: brightness(70%);
    border-radius: 10px;
  }

  img:hover {
    filter: brightness(100%);
  }
  .txt2 {
    font-weight: 600;
    color: #0b66c2;
    font-size: 18px;
    margin-left: 0.6em;
    filter: brightness(70%);
    text-decoration: none;
  }

  .txt2:hover {
    font-weight: 900;
    filter: brightness(130%);
  }

  .attr p {
    font-size: 12px;
    color: #000;
    font-weight: 400;
    width: 100%;
    text-align: center;
    margin-top: 5px;
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
    filter: brightness(170%);
    color: black;
  }

  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 45%;
    height: auto;

    img {
      height: 150px;
      width: 100%;
    }

    .attr {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: space-around;
    }
    .attr p {
      width: 85%;
      font-size: 14px;
    }
  }
`;
