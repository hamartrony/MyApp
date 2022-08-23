import { CardsDiv } from "./style";

function Cards({ title, list }) {
  return (
    <CardsDiv>
      <h2>{title}</h2>
      {list.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="imagem"></img>
          <h3>{item.sub}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </CardsDiv>
  );
}

export default Cards;
