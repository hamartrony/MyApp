import styled from "styled-components";

export const CardsDiv = styled.div`
  width: 95%;
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
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-left: 50px;
  }

  h3 a {
    text-decoration: none;
  }

  p {
    font-size: 10px;
    color: black;
    margin-left: 50px;
  }

  .list {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .item {
    width: 80%;
    height: 40px;
    margin-left: 20px;
  }

  img {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: ${(props) =>
      props.tittleStr === "Projetos" ? "none" : "50%"};
  }

  @media only screen and (min-width: 770px) {
    margin-top: 0;
    margin-bottom: 20px;
    width: 32%;
    height: 400px;

    .item {
      height: 60px;
    }

    .list {
      height: 80%;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 16px;
      margin-left: 70px;
    }

    p {
      font-size: 12px;
      margin-left: 70px;
    }

    img {
      position: absolute;
      width: 60px;
      height: 60px;
    }
  }
`;
