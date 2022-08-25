import styled from "styled-components";

export const CardsDiv = styled.div`
  width: 97%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  margin-top: 15px;
  background-color: #fff;
  border-radius: 0.5em;
  border: 1px solid #cccccc;

  h2 {
    font-size: 15px;
    font-weight: 900;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  a h3 {
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: black;
  }

  a {
    text-align: center;
    text-decoration: none;
  }

  .list {
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .item {
    padding: 10px;
    width: 130px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 130px;
    height: 100px;
    border-radius: 10%;
    filter: brightness(80%);
    margin-bottom: 10px;
  }

  .divButton {
    width: 100%;
    flex-grow: 3;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  button {
    width: 180px;
    height: 40px;
    margin-bottom: 10px;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    color: white;
    background-color: #0b66c2;
  }

  button:active {
    background-color: #cccccc;
  }

  @media only screen and (min-width: 770px) {
    margin-top: 0;
    width: 32%;
    height: 500px;
    justify-content: flex-start;

    .item {
      width: 40%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .item:hover {
      cursor: pointer;
    }

    .list {
      height: 400px;
    }

    h2 {
      font-size: 20px;
    }
    a {
      text-decoration: none;
    }

    a h3 {
      font-size: 16px;
      text-decoration: none;
    }

    p {
      font-size: 12px;
    }

    img {
      width: 100%;
      height: 120px;
    }

    img:hover {
      filter: brightness(100%);
    }
  }
`;
