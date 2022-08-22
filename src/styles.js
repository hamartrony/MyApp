import styled from "styled-components";

export const AppDiv = styled.div`
  background-color: #f3f2ef;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 70px;

  section {
    width: 97%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #cccccc;
  }

  /* IMAGENS SECTION */

  .imagens {
    height: 120px;
    display: flex;
  }

  .imagens :last-child {
    width: 100%;
    height: 90px;
    border-radius: 10px 10px 0 0;
  }

  .imagens :first-child {
    width: 80px;
    height: 80px;
    position: absolute;
    border-radius: 60%;
    background-color: #505050;
    margin-top: 30px;
    margin-left: 15px;
    border: 2px solid #fff;
  }

  /* TEXTOS SECTION */
  .text {
    width: 60%;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-left: 20px;
    line-height: 15px;
  }

  .text h2 {
    font-size: 20px;
    font-weight: 900;
  }

  .text h3 {
    font-size: 18px;
    text-align: start;
    margin-top: 5px;
    line-height: 19px;
  }

  p {
    font-size: 16px;
    color: #666666;
    margin-top: 5px;
  }

  .font2 {
    font-size: 15px;
    font-weight: 900;
    color: #0b66c2;
  }

  /* Botoes e icones */
  .links {
    height: 140px;
    width: 90%;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sobre {
    width: 40%;
    height: 35px;
    margin-right: 10px;
    background-color: #0b66c2;
    border-radius: 15px;
    border: none;
    color: #fff;
    font-weight: 600;
  }

  .sobre:hover {
    background-color: #0060c0;
  }

  .contato {
    width: 40%;
    height: 35px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px #0b66c2 solid;
    color: #0b66c2;
    font-weight: 600;
    font-size: 12px;
  }

  /* tecnologias */
  .descr {
    background-color: #f3f2ef;
    height: 60px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 10px 0 16px 10px;
    border-radius: 10px;
    overflow: hidden;
  }

  .descr h2 {
    font-size: 10px;
    font-weight: 900;
    margin-bottom: 7px;
  }

  .tec-icons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 60px;
  }

  .react-icon {
    width: 2rem;
    animation: loading-spinner 3s linear infinite;
  }

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .python-icon {
    width: 2rem;
    animation: loading-spinner 2s linear infinite;
  }

  .html-icon {
    width: 2rem;
    animation: pull 2s infinite alternate-reverse;
  }

  .css-icon {
    width: 2rem;
    animation: slide-in 1s infinite alternate;
  }

  @keyframes slide-in {
    from {
      transform: rotateX(180deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }
  .js-icon {
    width: 2rem;
    animation: slide-out 1.1s infinite alternate;
  }

  @keyframes slide-out {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  .docker-icon {
    width: 2rem;
    animation: pull 1.5s infinite alternate;
  }

  @keyframes pull {
    from {
      width: 0rem;
      padding: 1rem;
    }
    to {
      width: 2rem;
      padding: 0;
    }
  }
  .dj-icon {
    width: 2rem;
    animation: slide-ham 2s infinite alternate;
  }

  @keyframes slide-ham {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  .postgres-icon {
    width: 2rem;
    animation: sli 1.5s infinite alternate;
  }

  @keyframes sli {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  footer {
    margin-top: 10px;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .social {
    height: 4.1em;
    display: flex;
    align-items: flex-end;
  }

  .social a {
    font-size: 3em;
    color: #000;
  }

  .social a:hover {
    font-size: 4em;
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    align-content: space-around;

    section {
      width: 66%;
      height: 500px;
      margin-bottom: 15px;
    }

    .imagens {
      height: 180px;
    }

    .imagens :last-child {
      width: 100%;
      height: 140px;
      border-radius: 0.7em 0.7em 0 0;
    }

    .imagens :first-child {
      width: 120px;
      height: 120px;
      margin-top: 50px;
      margin-left: 20px;
    }

    .text {
      width: 50%;
      height: 130px;
      display: flex;
      flex-direction: column;
      margin-left: 1.5em;
      margin-bottom: 10px;
      line-height: 20px;
    }

    .links {
      height: 30%;
    }

    .tec-icons img {
      width: 2em;
    }
  }
`;
