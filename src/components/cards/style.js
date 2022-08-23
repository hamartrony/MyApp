import styled from "styled-components";

export const CardsDiv = styled.div`
  width: 95%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  margin-top: 15px;
  background-color: #fff;
  border-radius: 0.5em;
  border: 1px solid #cccccc;

  h2 {
    font-size: 20px;
    font-weight: 900;
    margin-left: 20px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-left: 75px;
  }

  p {
    font-size: 13px;
    color: black;
    margin-left: 75px;
  }

  .item {
    width: 80%;
    margin-left: 20px;
  }

  img {
    position: absolute;
    width: 70px;
    height: 70px;
  }

  @media only screen and (min-width: 770px) {
    margin-top: 0;
    margin-bottom: 20px;
    width: 32%;
    height: 500px;
  }
`;
